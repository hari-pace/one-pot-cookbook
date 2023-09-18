import { NavLink, Outlet } from "react-router-dom";

import Navbar from "./Navbar";

//Layout used to set navbar and connecting the route
const Layout = ({ recipes, searchBar, setSearchBar }) => {
  return (
    <>
      <main>
        <Navbar
          recipes={recipes}
          searchBar={searchBar}
          setSearchBar={setSearchBar}
        />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
