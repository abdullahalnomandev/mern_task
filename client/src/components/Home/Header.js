import React from 'react';
import { PageHeader } from "antd";


const Header = () => {
 
    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="Users"
          style={{ background: "#7099e3", color: "rgb(158 202 247 / 89%)" }}
        />
      </div>
    );
};

export default Header;