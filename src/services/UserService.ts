import { prisma } from '../lib/prisma';
import bcrypt from 'bcryptjs';

export class UserService {
 
  async createUser(data: any) {
    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new Error('Email já cadastrado.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async listUsers(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const users = await prisma.user.findMany({
      skip: skip,
      take: limit,
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc', 
      },
    });

    
    const total = await prisma.user.count();

    return {
      data: users,
      meta: {
        total,
        page,
        lastPage: Math.ceil(total / limit),
      },
    };
  }

  
  async getUserById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async updateUser(id: string, data: any) {
    await this.getUserById(id);

    if (data.email) {
      const emailAlreadyExists = await prisma.user.findFirst({
        where: {
          email: data.email,
          id: { not: id },
        },
      });

      if (emailAlreadyExists) {
        throw new Error('Este email já está em uso.');
      }
    }

    const user = await prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
      },
    });

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async deleteUser(id: string) {
    await this.getUserById(id);
    await prisma.user.delete({
      where: { id },
    });
  }

  async updatePassword(id: string, newPassword: string) {
    await this.getUserById(id);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    });
  }
}