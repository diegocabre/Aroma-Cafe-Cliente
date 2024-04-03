// userService.js
import API_URL from "../config";

export const getUser = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  return data;
};

export const getUserById = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  const data = await response.json();
  return data;
};

export const createUser = async (user) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const deleteUser = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

export const login = async (user) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/logout`, {
    method: "POST",
  });
  const data = await response.json();
  return data;
};

export const register = async (user) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};
