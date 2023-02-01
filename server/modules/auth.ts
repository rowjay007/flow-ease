import jwt from "jsonwebtoken";

interface User {
  id: string;
  username: string;
}

const SECRET = "secret";

export const createJSONWebToken = (user: User): string => {
  try {
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      SECRET
    );
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
