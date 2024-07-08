import { Router } from "express";
import { register } from "@controllers/Admin/Auth/register.controller.js";

const router = Router();

// Admin
router.route("/admin-registeration").post(register);

export default router;
