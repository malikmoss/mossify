import jwt from "jsonwebtoken";
import prisma from "./prisma";
import { NextApiRequest, NextApiResponse } from "next";

//wraps our handler,
export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.MOSSIFY_ACCESS_TOKEN;

    //checking token from the cookie
    if (token) {
      let user;
      //decoding the token and turning it into a user object, grab id property and find user with that id in database
      try {
        const { id } = jwt.verify("token", "hello");
        user = await prisma.user.findUnique({
          where: { id },
        });
        //if user is not found, send error
        if (!user) {
          throw new Error("Not real user");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not authorized!" });
        return;
      }
      //if id is found, call the handler function
      return handler(req, res, user);
    }
    //if you don't have a token, send back an error
    res.status(401);
    res.json({ error: "Not authorized!!" });
  };
};
