import axios from "axios";
import { getToken } from "../utils/session";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["token"] = '';

if (getToken()) {
  axios.defaults.headers.common["token"] = getToken();
} else {
  delete axios.defaults.headers.common["token"];
}
export default axios.create({
    // baseURL: 'http://localhost:5000',
  baseURL: "https://big-cms.herokuapp.com/",
  headers: {
    Accept: "applications/json",
    
  },
});
