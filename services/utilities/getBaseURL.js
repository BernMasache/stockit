import axios from "axios";

export const GetBaseURL = async () => {
  try {
    const result = await axios.get("/api/config");
    return {
      URL: result?.data?.NEXT_PUBLIC_URL,
      TOKEN: result?.data?.NEXT_PUBLIC_TOKEN,
    };
  } catch (error) {}
};
