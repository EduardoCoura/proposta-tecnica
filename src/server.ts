import express from 'express';
import { userRoutes } from './routes/user.routes';
import { authRoutes } from './routes/auth.routes';

const app = express();
const PORT = 3333;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});