import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

const authService = new AuthService();

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await authService.authenticate({ email, password });
      
      return res.json(result);
    } catch (error: any) {
      
      return res.status(401).json({ error: error.message });
    }
  }
}