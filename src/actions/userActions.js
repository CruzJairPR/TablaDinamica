import axios from "axios";

const API_URL = "http://localhost:3001/api/usuarios";

export const setUsers = (users) => ({
  type: "SET_USERS",
  payload: users,
});

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${userId}`);
    dispatch({ type: "DELETE_USER", payload: userId });
  } catch (error) {
    throw new Error(`Error al eliminar el usuario: ${error.message}`);
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, user);
    dispatch({ type: "ADD_USER", payload: response.data });
  } catch (error) {
    throw new Error(`Error al agregar el usuario: ${error.message}`);
  }
};

export const updateUser = (user) => async (dispatch) => {
  try {
    const response = await axios.patch(`${API_URL}/${user.id}`, user);
    dispatch({ type: "UPDATE_USER", payload: response.data });
  } catch (error) {
    throw new Error(`Error al actualizar el usuario: ${error.message}`);
  }
};