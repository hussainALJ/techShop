import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../api/userApi";

function Login() {
  const nav = useNavigate()
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  async function getToken () {
    try {
      const response = await auth(userEmail, userPassword)
      localStorage.setItem("token", JSON.stringify(response.data))
    } catch (err) {
      console.log(err)
    }
  }

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
      <button onClick={() => {
        getToken()
        nav("/profile")
      }}>Log in</button>
    </div>
  );
}

export default Login;
