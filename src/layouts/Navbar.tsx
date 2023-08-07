import React from "react";

const Navbar: React.FC = () => {
  return (
    <aside>
      <div>
        <ul>
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Navbar;
