import React, { useEffect, useState } from 'react';
import HotelApi from '@/lib/api/hotel/HotelApi';
import HotelCard from '@/components/pages/hotels/HotelCard';
import { HotelDto } from '@/lib/api/hotel/dto/HotelDto';
import Layout from "@/components/common/layout/Layout";

const Hotels = () => {
    const [hotels, setHotels] = useState<HotelDto[]>([]);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const hotelsData: HotelDto[] = await HotelApi.findAllHotels();
                setHotels(hotelsData);
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
        };

        fetchHotels();
    }, []);

    return (
        <div>
            <Layout title={"Готелі"} />
            {hotels.map((hotel) => (
                <HotelCard key={hotel.title} hotel={hotel} />
            ))}
        </div>
    );
};

export default Hotels;