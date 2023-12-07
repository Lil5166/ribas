import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, TextField, Typography, Container } from '@mui/material';
import {RoomDto} from "@/lib/api/hotel/dto/RoomDto";
import HotelApi from "@/lib/api/hotel/HotelApi";

export default function CreateRoom() {
    const router = useRouter();
    const { hotelId } = router.query;
    const [roomData, setRoomData] = useState<RoomDto>({
        price: 0,
        id: "",
        rooms: 0,
        beds: 0,
    });

    const handleCreateRoom = async () => {
        try {
            const currentHotelId = typeof hotelId === 'string' ? hotelId : '';

            const createdRoom = await HotelApi.createRoom(currentHotelId, roomData);

            console.log('Room created:', createdRoom);
            router.push(`/hotel/${currentHotelId}`);
        } catch (error) {
            console.error('Error creating room:', error);
        }
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const numericValue = name === 'price' ? parseFloat(value) : parseInt(value, 10);

        setRoomData((prevData) => ({
            ...prevData,
            [name]: name === 'description' ? String(value) : isNaN(numericValue) ? 0 : numericValue,
        }));
    };



    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Create a Room
            </Typography>
            <form>
                <TextField
                    label="Price"
                    type="number"
                    name="price"
                    value={roomData.price}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    name="description"
                    value={roomData.description || ''}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Number of Rooms"
                    name="rooms"
                    value={roomData.rooms}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Number of Beds"
                    name="beds"
                    value={roomData.beds}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCreateRoom}
                    fullWidth
                    style={{ marginTop: '1rem' }}
                >
                    Create Room
                </Button>
            </form>
        </Container>
    );
}
