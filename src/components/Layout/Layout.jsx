import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="catalog">Cars Catalog</NavLink>
          <NavLink to="favorites"> Favotites</NavLink>
        </header>
        <Outlet/>
    </div>
  )
}

export default Layout