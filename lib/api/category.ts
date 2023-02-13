import axios from "axios";
import { SERVER_BASE_URL } from "../utils/constant";

const CategoryAPI = {
  getAll: async () => {
    try {
      const response = await axios.get(
        `${SERVER_BASE_URL}/Categories/GetAllCategories`
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  getById: async (id) => {
    try {
      const response = await axios.get(`${SERVER_BASE_URL}/Categories/${id}`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  add: async (title, description, position) => {
    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/Categories/AddCategory`,
        JSON.stringify({
          name: title,
          description: description,
          position: position,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  edit: async (id, title, description, position) => {
    try {
      const response = await axios.put(
        `${SERVER_BASE_URL}/Categories/Update/${id}`,
        JSON.stringify({
          id: id,
          name: title,
          description: description,
          position: position,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  delete: async (id) => {
    try {
      const response = await axios.patch(
        `${SERVER_BASE_URL}/Categories/Delete/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

export default CategoryAPI;
