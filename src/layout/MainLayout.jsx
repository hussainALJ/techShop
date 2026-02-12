import { NavLink, Outlet } from "react-router-dom";
import { useUser } from "../services/useUser";
import { useFetch } from "../api/useFetch";
import { useEffect } from "react";
import { profile } from "../api/userApi";

function MainLayout() {
  const setUser = useUser.getState().setUser;
  const user = useUser((state) => state.user);
  const Token = useUser((state) => state.Token);
  const { data, isLoading, error } = useFetch(profile, Token);
  useEffect(() => {
    if (isLoading) {
      setUser("loading");
    } else if (data) {
      setUser(data);
    } else if (error) {
      setUser("error");
    }
  }, [data, isLoading, error ]);
  return (
    <>
      <header className=" py-5">
        <div className=" max-w-7xl mx-auto px-3 flex justify-between items-center ">
          <div className=" text-3xl font-black ">Logo</div>
          <div className=" flex justify-center gap-4 text-sm font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Store</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </div>
          {typeof user === "string" || !user ? (
            <NavLink to="/login">Log in</NavLink>
          ) : (
            <div>{user.name}</div>
          )}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
