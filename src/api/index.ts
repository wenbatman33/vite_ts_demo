import API_REQUEST from '@/utils/http';

// payload => type 尚未定義
export const hotLive = (payload?:unknown) => API_REQUEST.get('/live/hotlive', { params: payload });
