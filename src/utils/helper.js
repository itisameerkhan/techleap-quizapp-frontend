import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(`${import.meta.env.BASE_URL}/user/get/info`, {
      withCredentials: true,
    });

    return response.data.data;

  } catch (e) {
    console.log(e);
    return null;
  }
};
