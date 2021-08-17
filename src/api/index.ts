import axios from '@/axiosSetting';

export const mockTest = (payload:unknown) => axios.get('/live/hotlive',{ params: payload });
// 用户登录
export const login = (payload:unknown) => axios.post('/backend/admin/user/login', payload);
// export const hotLive = (payload:unknown) => axios.get('/live/hotlive', { params: payload });
export const hotLive = (payload:unknown) => axios.get('/live/hotlive', { params: payload });
