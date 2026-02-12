import { Link, NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
    <header className=" py-5">
      <div className=" max-w-7xl mx-auto px-3 flex justify-between items-center ">
        <div className=" text-3xl font-black ">Logo</div>
        <div className=" flex justify-center gap-4 text-sm font-bold">
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/products">Store</NavLink>
          <NavLink to="/cart" >Cart</NavLink>
        </div>
        <NavLink to="/login" >Log in</NavLink>
      </div>
    </header>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default MainLayout