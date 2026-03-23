import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const getTours = async () => {
  const res = await axios.get(`${BASE_URL}/tours`);
  return res.data;
};