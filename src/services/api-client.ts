import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "df42c7182e164954847b3a0b28e9a86d",
  },
});
