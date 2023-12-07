import { useState } from 'react';
import { Snackbar, AlertTitle, Button, Card, CardContent, CardHeader, Typography, Link as NextLink } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import MuiAlert from '@mui/material/Alert';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { HotelDto } from '@/lib/api/hotel/dto/HotelDto';
import { RoomDto } from '@/lib/api/hotel/dto/RoomDto';
import HotelApi from '@/lib/api/hotel/HotelApi';
import Layout from '@/components/common/layout/Layout';
import { useSession } from 'next-auth/react';
import Link from "next/link";
import Cookies from 'js-cookie';

interface HotelPageProps {
    hotel: HotelDto | undefined;
    rooms: RoomDto[] | undefined;
}

const HotelPage: NextPage<HotelPageProps> = ({ hotel, rooms }) => {
    const router = useRouter();
    const hotelId = router.query?.hotelId as string | undefined;
    const { data: session } = useSession();
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const isAuthenticated = !!session?.user || !!Cookies.get('token');

    const handleRoomReservation = (roomId: string) => {
        if (!isAuthenticated) {
            setShowAlert(true);
            return;
        }
        if (roomId) {
            console.log('Room reservation for room ID:', roomId);
        } else {
            console.error('Invalid room ID:', roomId);
        }
        console.log(`Room ${roomId} reserved by ${session?.user?.name}`);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
        router.push('/login');
    };

    if (!hotel) {
        return (
            <div>
                <Layout title="Hotel Not Found" />
                <div>Hotel not found</div>
            </div>
        );
    }

    return (
        <div>
            <Layout title={hotel.title || 'Untitled Hotel'} />
            <Card sx={{ maxWidth: 400, margin: 'auto', marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                <CardHeader title={hotel.title || 'Untitled Hotel'} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <RoomIcon /> Локація: {hotel.location || 'Unknown Location'}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        Опис готелю: {hotel.description || 'відсутній'}
                    </Typography>
                </CardContent>
                <Link href={`/hotel/${hotelId}/reg-rooms`} passHref>
                    <Button variant="contained" color="primary">
                        Додати кімнату
                    </Button>
                </Link>
            </Card>

            {rooms && rooms.length > 0 && (
                <div>
                    <Typography variant="h5" color="text.primary" sx={{ marginTop: 4 }}>
                        Кімнати:
                    </Typography>
                    {rooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            room={room}
                            onReserve={() => handleRoomReservation(room.id)}
                            hotelId={hotelId}
                            isAuthenticated={isAuthenticated}
                        />
                    ))}
                </div>
            )}
            <Snackbar open={showAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
                <MuiAlert onClose={handleCloseAlert} elevation={6} variant={"filled"} severity="warning">
                    <AlertTitle>Помилка бронювання!</AlertTitle>
                    Щоб забронювати кімнату, потрібно авторизуватися.
                </MuiAlert>
            </Snackbar>
        </div>
    );
};


export const getStaticPaths: GetStaticPaths = async () => {
    const hotels: HotelDto[] = await HotelApi.findAllHotels();
    const paths = hotels.map((hotel) => ({
        params: { hotelId: hotel.id !== undefined ? hotel.id.toString() : '' },
    }));

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<HotelPageProps> = async ({ params }) => {
    const hotelId = params?.hotelId as string;
    const [hotel, rooms] = await Promise.all([
        HotelApi.findHotelById(hotelId),
        HotelApi.findRoomsByHotelId(hotelId),
    ]);

    if (!hotel) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            hotel,
            rooms,
        },
        revalidate: 60,
    };
};

interface RoomCardProps {
    room: RoomDto;
    onReserve: () => void;
    hotelId: string | string[] | undefined;
    isAuthenticated: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onReserve, hotelId, isAuthenticated }) => (
    <Card sx={{ maxWidth: 300, margin: 2 }}>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                Price: ${room.price.toString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Description: {room.description || 'No description available'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Rooms: {room.rooms}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Beds: {room.beds}
            </Typography>
            {isAuthenticated ? (
                <Link href={`/hotel/${hotelId}/${room.id}`} passHref>
                    <Button
                        component="a"
                        variant="contained"
                        color="primary"
                        onClick={() => room.id && onReserve()}
                    >
                        Забронювати
                    </Button>
                </Link>
            ) : (
                <Button disabled variant="contained" color="primary">
                    Забронювати
                </Button>
            )}
        </CardContent>
    </Card>
);
export default HotelPage;