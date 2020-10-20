import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return(
        // a 태그로 작성하면, 클릭 시 React 가 새로고침 하기 때문에 react-router-dom 에 있는 Link 로 사용함
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Link 
                to={{
                    pathname: "/courses",
                    state: { fromNavigation: true }
                  }}
            >About</Link> */}
        </div>
    );
}

export default Navigation;