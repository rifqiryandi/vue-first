import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4010/ayopatuh",
  headers: {
    "Content-type": "application/json"
  }
});