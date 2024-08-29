import bcrypt from "bcrypt";
const users = [
    {
      name: "Admin User",
      email: "Jd9yH@example.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin: true,
    },
    {
      name: "John Doe",
      email: "Jd9yH1@example.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin: true,
    },
    {
      name: "Jane ",
      email: "Jd9yH2@example.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin: false,
    },
]
export default users;