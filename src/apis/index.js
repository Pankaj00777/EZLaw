import axios from "axios";
import { ENDPOINT } from "../config";
import { setData, setSessionData } from "../redux/action";

export const MakeApiCall = async (
  url,
  method = "get",
  data = null,
  withBearer = false,
  headers_ = {},
  token
) => {
  try {
    const headers = {
      "Content-Type": "application/json",

      ...headers_,
    };

    if (withBearer) {
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      } else {
        localStorage.clear();
        return window.location.assign("/sign-in");
      }
    }
    let url_ = ENDPOINT + url;
    const response = await axios({
      method,
      url: url_,
      data: data || null,
      headers,
      redirect: "follow",
    });

    return response.data;
  } catch (error) {
    if (error?.response?.status === 401) {
      setData({});
      setSessionData({});
      localStorage.clear();
      return window.location.assign("/sign-in");
    }
    // Handle errors here (e.g., log them or throw a custom error)
    return { message: error?.message };
  }
};
