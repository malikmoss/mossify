import { validateRoute } from "../../lib/auth";

//function to get the user
export default validateRoute((req, res, user) => {
  res.json(user);
});
