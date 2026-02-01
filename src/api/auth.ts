import { getUserByEmail } from "../db/queries/users.js";
import { checkPasswordHash, makeJWT } from "../auth.js";

import { respondWithJSON } from "./json.js";
import { UserNotAuthenticatedError } from "./errors.js";

import type { Request, Response } from "express";
import type { UserResponse } from "./users.js";

export async function handlerLogin(req: Request, res: Response) {
  type parameters = {
    password: string;
    email: string;
    expiresInSeconds?: number;
  };

  const params: parameters = req.body;

  const user = await getUserByEmail(params.email);
  if (!user) {
    throw new UserNotAuthenticatedError("invalid username or password");
  }

  const matching = await checkPasswordHash(
    params.password,
    user.hashedPassword,
  );
  if (!matching) {
    throw new UserNotAuthenticatedError("invalid username or password");
  }
    
    if(!params.expiresInSeconds){
        params.expiresInSeconds = 3600; //default to 1 hour
    }
    if (params.expiresInSeconds > 3600) {
        params.expiresInSeconds = 3600; //max 1 hour
    }

    const token = makeJWT(
        user.id,
        params.expiresInSeconds,
        process.env.JWT_SECRET!
    );
    

  respondWithJSON(res, 200, {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    token: token
  } satisfies UserResponse & { token: string });
}
