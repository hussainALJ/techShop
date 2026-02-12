import { Navigate } from "react-router-dom";
import { useUser } from "../services/useUser";

function Profile() {
  const user = useUser((state) => state.user);
  if (user === "loading") return <div>Loading</div>;
  if (user === "error" || !user) return <Navigate to="/login" replace />;
  return <div>{user.name}</div>;
}

export default Profile;
