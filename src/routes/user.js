import { UserController } from 'core/user/user.controller';
import express from 'express';

const router = express.Router();

router.get('/', UserController.getAll);

export default router;
