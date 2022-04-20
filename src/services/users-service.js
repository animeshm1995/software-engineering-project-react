import axios from "axios";
//const BASE_URL = "https://cs5500-01-sp22.herokuapp.com";
//const BASE_URL = "http://localhost:4000";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;


const api = axios.create({
    withCredentials: true
});

export const createUser = (user) =>
    api.post(`${USERS_API}`, user)
    .then(response => response.data);

export const findAllUsers = () =>
    api.get(USERS_API)
        .then(response => response.data);

export const findUserById = (uid) =>
    console.log("Animesh find user: ", uid);
    api.get(`${USERS_API}/${uid}`)
        .then(response => response.data);

export const deleteUser = (uid) =>
  api.delete(`${USERS_API}/${uid}`)
    .then(response => response.data);

export const updateUser = (uid, user) => {
  console.log("Animesh update user: ", user);
  api.put(`${USERS_API}/${uid}`, user)
      .then(response => response.data);
}

export const deleteUsersByUsername = (username) =>
  api.get(`${USERS_API}/username/${username}/delete`)
    .then(response => response.data);


const service = {
  findAllUsers
}

export default service;