import axios from "axios";

const API_KEY = "AIzaSyBbYR53qK9jQauppvl6-Th71uxZ3PGTtzE";
async function register(email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
  await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}

async function authenticate(email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  return response;
}

export function createUser(email, password) {
  return register(email, password);
}

export async function login(email, password) {
  return authenticate(email, password);
}
