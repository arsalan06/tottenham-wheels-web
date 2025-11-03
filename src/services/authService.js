import axios from "axios";
import { BaseUrl } from "../constant";

export const authService = {
  async getToken(email) {
    try {
      const res = await axios.post(`${BaseUrl}/get-jwt`, {
        email,
      });

      return res.data.token;
    } catch (error) {
      console.error("Error getting JWT:", error);
      throw error;
    }
  },

  async verifyToken(token) {
    try {
      const res = await axios.post(`${BaseUrl}/verify`, {
        token,
      });

      return res.data.valid;
    } catch (error) {
      console.error("Error getting JWT:", error);
      throw error;
    }
  },
};
