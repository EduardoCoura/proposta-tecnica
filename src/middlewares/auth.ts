import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export function authMiddleware(
  req: Request, 
  res: Response, 
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET as string);
    
    const { id } = data as TokenPayload;

    (req as any).userId = id;

    return next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}