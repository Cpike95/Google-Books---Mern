import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <Link to={"/api/books"} className="navbar-brand">
                      <strong>
                        Saved
                      </strong>
      </Link>
      <Link to={"/api/search"} className="navbar-brand" >
                      <strong>
                        Search
                      </strong>
      </Link>

    </nav>
  );
}

export default Nav;
