import { Router } from "express";

const router = Router();

// Admin
router.route("/registeration").post(register);

export default router;
