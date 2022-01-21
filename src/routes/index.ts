
import UserController from "../controllers/userController";
import { Request, Response } from "express";
import * as express from 'express';
import {
  ValidatorJoiBody, ValidatorJoiQuery, postSchemas, patchSchemas, deleteSchemas
} from "../services/UserValidation";

const router = express.Router();

router.get("/users", async (req: Request, res: Response) => {
  const controller = new UserController();
  await controller.getUsers(req, res);
});

router.post("/users", ValidatorJoiBody(postSchemas.user), async (req: Request, res: Response) => {
  const controller = new UserController();
  await controller.createUser(req, res);
});

router.patch("/users", ValidatorJoiQuery(patchSchemas.user), async (req: Request, res: Response) => {
  const controller = new UserController();
  await controller.updateUser(req, res);
});

router.delete("/users", ValidatorJoiQuery(deleteSchemas.user), async (req: Request, res: Response) => {
  const controller = new UserController();
  await controller.deleteUser(req, res);
});

export default router;