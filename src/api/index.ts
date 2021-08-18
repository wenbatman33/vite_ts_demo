import axios from '@/axiosConfig';

export const hotLive = (payload?:unknown) => axios.get('/live/hotlive', { params: payload });
