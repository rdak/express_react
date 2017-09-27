import React from 'react';
import { Link } from 'react-router';
import pages from '../data/pages';

class Header extends React.Component {
    /*constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handleHeaderClick(e.target.getAttribute('href'));
    }*/

    render() {
        const navLinks = pages.map(page => {
            // let active = '';
            // console.log(this.props);
            /*if (this.props.currentPage == page.href){
                active = ' header__menu-point--active';
            }

            let className = "header__menu-point" + active;*/

            return (
                <li key={page.name}>
                    <Link key={page.href} to={page.href} className="header__menu-point" activeClassName="header__menu-point--active">
                        {page.name}
                    </Link>;
                </li>
            )
        });

        return (
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <Link to="/">Vsevolod Chebykin</Link>
                    </div>
                    <ul className="header__menu">
                        {navLinks}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;