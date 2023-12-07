import { client } from '../instance';
import Cookies from "js-cookie";
import {HotelDto} from "@/lib/api/hotel/dto/HotelDto";
import {getAuthorizationHeader} from "@/lib/utils/getAuthorizationHeader";
import {RoomDto} from "@/lib/api/hotel/dto/RoomDto";
import {BookingDto} from "@/lib/api/hotel/dto/BookingDto";

const token = Cookies.get('token')
class HotelApi {
    async createHotel(body: HotelDto) {
        const { data } = await client.post('/hotel', body, getAuthorizationHeader())
        return data;
    }

    async findAllHotelsByLocation(location: string) {
        const { data } = await client.get('/hotel', {
            params: {
                location: location,
            },
        });
        return data;
    }

    async findAllHotels() {
        const { data } = await client.get('/hotel');
        return data;
    }
    async findHotelById(hotelId: string) {
        const { data } = await client.get(`/hotel/${hotelId}`);
        return data;
    }

    async findRoomsByHotelId(hotelId: string) {
        const { data } = await client.get(`/hotel/${hotelId}/rooms`);
        return data;
    }

    async createRoom(hotelId: string, body: RoomDto){
        const {data} = await client.post(`/hotel/${hotelId}/create-room`, body, getAuthorizationHeader())
        return data;
    }
    async bookingRoom(roomId: string, body: BookingDto) {
        const { data } = await client.post(`/booking/${roomId}`, body, getAuthorizationHeader())
        return data
    }
    async getBookingsByUserId() {
        const { data } = await client.get('/users/bookings', getAuthorizationHeader())
        return data;
    }

}
export default new HotelApi();