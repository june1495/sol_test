import { Router } from "express";
import UserRoute from "./users/router.js";

const router = Router();

router.use(UserRoute);

export default router;
