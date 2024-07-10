import { asyncHandler } from "@utils/asyncHandler";
import { registerAdmin } from "@services/Admin/Auth/register.service.js";
import { ApiResponse } from "@utils/ApiResponse.js";

const register = asyncHandler(async (req, res) => {
  const adminData = req.body;
  const admin = await registerAdmin(adminData);

  return res.status(201).json(new ApiResponse(201, admin, "Admin registered"));
});

export { register };
