import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { HotelDto } from '@/lib/api/hotel/dto/HotelDto';

interface HotelCardProps {
    hotel: HotelDto;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => (
    <Link href={`/hotel/${hotel.id}`}>
            <Card key={hotel.title} sx={{ maxWidth: 300, margin: 2 }}>
                <CardHeader title={hotel.title} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Location: {hotel.location}
                    </Typography>
                </CardContent>
            </Card>
    </Link>
);

export default HotelCard;
