import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import filterDuplicate from "./utils/Filterduplicate";

const Layout = ({ recipes, searchBar, setSearchBar }) => {
  const [value, setValue] = useState("");

  const filteredItems = filterDuplicate({ recipes });

  const handleSearchBar = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
    setValue("");
  };

  return (
    <>
      <main>
        <div>
          <form>
            <input
              id="searchFiled"
              placeholder="Search by category"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            />
            <button onClick={handleSearchBar} value={value}>
              Search
            </button>
          </form>
        </div>
        <div className="container-nav">
          {filteredItems &&
            filteredItems.map((item) => (
              <div key={item.fields.category}>
                <NavLink>{item.fields.category}</NavLink>
              </div>
            ))}
        </div>

        <Outlet />
      </main>
    </>
  );
};

export default Layout;
