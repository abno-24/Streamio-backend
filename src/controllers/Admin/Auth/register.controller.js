import { asyncHandler } from "@utils/asyncHandler.js";
import { registerAdmin } from "@services/Admin/Auth/register.service.js";
import { ApiResponse } from "@utils/ApiResponse.js";

const register = asyncHandler(async (req, res) => {
  const adminData = req.body;
  console.log(adminData);
  // const admin = await registerAdmin(adminData);

  return res.status(201).json(new ApiResponse(201, admin, "Admin registered"));
});

export { register };
