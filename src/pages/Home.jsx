import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="Home">
      <nav>
        <ul>
          <li>
            <Link to="/csstricks">CSS TRICKS</Link>
          </li>
          <li>
            <Link to="/coolfeatures">COOL FEATURES</Link>
          </li>
          <li>
            <Link to="/hooks">HOOKS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;