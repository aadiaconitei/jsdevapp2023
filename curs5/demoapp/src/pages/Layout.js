import React from 'react'
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/autor">Autor</Link>
              </li>
              <li><a href="/aaaa"> Page 404</a></li>
            </ul>
          </nav>

          <Outlet /> 
          {/* Outlet renders the current route selected. */}
          <footer>Footer</footer>
        </>
      )
}