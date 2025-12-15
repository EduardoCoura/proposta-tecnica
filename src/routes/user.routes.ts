import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();
const userController = new UserController();

router.post('/', userController.create);

router.use(authMiddleware);

router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.patch('/:id/password', userController.updatePassword);

export { router as userRoutes };