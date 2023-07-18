import { Router } from "express";
import * as controller from "./controller.js";
const router = Router();

router.post("/user/signin", controller.signIn);

export default router;
