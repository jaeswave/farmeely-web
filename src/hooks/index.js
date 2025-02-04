import axios from "axios";

const useGet = async (url, token = null) => {
  return axios({
    url: url,
    method: "get",
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });
};

const usePost = async (url, data, token = null) => {
  return axios({
    url: url,
    method: "post",
    data: data,
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });
};

const usePatch = async (url, data = null, token = null) => {
  const config = {
    url: url,
    method: "patch",
    data: data,
  };
  if (token) {
    config.headers = {
      "Content-Type": "application/json",
      token,
    };
  }
  return axios(config);
};

const useDelete = async (url) => {
  try {
    const response = await axios({
      url: url,
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const usePut = async (url, data) => {
  try {
    const response = await axios({
      url: url,
      method: "put",
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { useGet, usePost, usePatch, useDelete, usePut };
