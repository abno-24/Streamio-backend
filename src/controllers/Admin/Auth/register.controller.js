import { asyncHandler } from "@utils/asyncHandler";
import { registerAdmin } from "@services/Admin/Auth/register.service.js";

const register = asyncHandler(async (req, res) => {
  console.log(req.body);
  await registerAdmin();
});

export { register };
