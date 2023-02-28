const BASE_URL = 'https://dummyjson.com';

export const signIn = async (username, password) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password}),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }

  const data = await response.json();
  return data;
};
