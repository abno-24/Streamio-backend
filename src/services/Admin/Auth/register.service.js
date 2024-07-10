import Admin from "@models/Admin/admin.model.js";
import { ApiError } from "@utils/ApiError.js";

const registerAdmin = async (data) => {
  const { first_name, last_name, email, phone, password } = data;

  try {
    const [user, created] = await Admin.findOrCreate({
      where: { email, phone },
      defaults: {
        first_name,
        last_name,
        email,
        phone,
        password,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    // throw new ApiError(500, "Failed to register admin");
  }
};

export { registerAdmin };
