import { UserController } from 'controllers/user.controller';
import express from 'express';

const router = express.Router();

router.get('/', UserController.getAll);

export default router;
