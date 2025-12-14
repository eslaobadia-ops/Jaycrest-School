
import axios from "axios";
export const api = axios.create({
  baseURL: "https://file-website-1.onrender.com"
});
export const setAuth = (token)=>{
  if(token) api.defaults.headers.common.Authorization = `Bearer ${token}`;
  else delete api.defaults.headers.common.Authorization;
}
