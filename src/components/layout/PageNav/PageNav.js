import React from 'react';
import './PageNav.scss';

const PageNav = () => {
  return (
    <nav className="container center">
      <div className="logo">
        <img src="https://i.postimg.cc/52bv98NS/narwhal-2.png" alt="narwal"/>
      </div>
      <div className="menu">
        <div className="menu_right">
          <ul className="menu_list">
            <li className="menu_list-item">
              <div className="menu_link menu_link_active">about</div>
            </li>
            <li className="menu_list-item">
              <div className="menu_link">skills</div>
            </li>
            <li className="menu_list-item">
              <div className="menu_link">portfolio</div>
            </li>
            <li className="menu_list-item">
              <div className="menu_link">contact</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PageNav;