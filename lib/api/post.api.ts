import axios from "axios";
import { SERVER_BASE_URL } from "../utils/constant";

const PostApi = {
  getAll: async () => {
    // check user and get token => work after
    try {
      const response = await axios.get(`${SERVER_BASE_URL}/News/getAllNews`);
      return response;
    } catch (err) {
      return err.response;
    }
  },
  getForClient: async () => {
    try {
      const response = await axios.get(`${SERVER_BASE_URL}/News/getNewsClient`);
      return response;
    } catch (err) {
      return err.response;
    }
  },
  getForClientById: async (id) => {
    try {
      const response = await axios.get(
        `${SERVER_BASE_URL}/News/getNewsClient/${id}`
      );
      return response;
    } catch (err) {
      return err.response;
    }
  },
  getPostById: async (id) => {
    try {
      const response = await axios.get(`${SERVER_BASE_URL}/News/${id}`);
      return response;
    } catch (err) {
      return err.response;
    }
  },
  add: async (title, subTitle, content, image, categoryId, userId) => {
    const formData = new FormData();
    formData.append("tiltle", title);
    formData.append("subTitle", subTitle);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("categoryId", categoryId);
    formData.append("userCreatedId", userId);

    try {
      const response = await axios.post(
        `${SERVER_BASE_URL}/News/addNews`,
        formData
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  edit: async (id, title, subTitle, content, image, categoryId, userId) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("tiltle", title);
    formData.append("subTitle", subTitle);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("categoryId", categoryId);
    formData.append("userUpdatedId", userId);

    try {
      const response = await axios.put(
        `${SERVER_BASE_URL}/News/edit/${id}`,
        formData
      );
      return response;
    } catch (error) {
      return error.response;
    }
  },
  delete: async (id) => {
    try {
      const response = await axios.patch(
        `${SERVER_BASE_URL}/News/deleteNews/${id}`
      );
      return response;
    } catch (err) {
      return err.response;
    }
  },
};

export default PostApi;
