import axios from "axios";

const Axios = axios.create({
  baseURL: "https://burger-7262d.firebaseio.com/",
});

export default Axios;
