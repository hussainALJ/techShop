import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../api/userApi";
import { useUser } from "../services/useUser";

function Login() {
  const nav = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const user  = useUser((state) => state.user);
  const setToken = useUser((state) => state.setToken)

  async function getToken() {
    try {
      const response = await auth(userEmail, userPassword);
      setToken(response.data)
    } catch (err) {
      console.log(err);
    }
  }

  if (typeof user !== "string" || !user) return <Navigate to="/profile" replace />;

  return (
    <div className=" flex flex-col ">
      <input
        className=" border border-black "
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        className=" border border-black "
        type="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button
        onClick={() => {
          getToken();
          nav("/profile");
        }}
      >
        Log in
      </button>
    </div>
  );
}

export default Login;
