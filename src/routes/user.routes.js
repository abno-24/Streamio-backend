import { Router } from "express";

const router = Router();

// Admin
router.route("/admin-registeration").post(register);
