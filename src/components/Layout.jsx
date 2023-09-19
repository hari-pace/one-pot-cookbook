import { Link, NavLink, Outlet, useParams } from "react-router-dom";

import Navbar from "./Navbar";
import CardInter from "./Card";

//Layout used to set navbar and connecting the route
const Layout = ({ recipenav, recipesSearch, searchBar, setSearchBar }) => {
  return (
    <>
      <main>
        <Navbar recipenav={recipenav} setSearchBar={setSearchBar} />
        <div className="container-search-items">
          {recipesSearch && searchBar.length > 0
            ? recipesSearch.map((recipe) => (
                <div key={recipe.fields.urlname}>
                  <NavLink
                    onClick={() => {
                      setSearchBar("");
                    }}
                    to={`${recipe.fields.category}/${recipe.fields.urlname}`}
                  >
                    {<CardInter recipe={recipe} />}
                  </NavLink>
                </div>
              ))
            : null}
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
