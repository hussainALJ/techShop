import { Link, NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Store</NavLink>
      <NavLink to="/cart" >Cart</NavLink>
    </header>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default MainLayout