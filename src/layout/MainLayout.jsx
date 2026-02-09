import { Link, NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Store</NavLink>
    </header>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default MainLayout