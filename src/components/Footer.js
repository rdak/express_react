import React from 'react';
import { Link } from 'react-router';
import pages from '../data/pages';

class Footer extends React.Component {
  	render() {
    	const navLinks = pages.map(page => {
      		return (
                <li key={page.name}>
                    <Link key={page.href} to={page.href} className="footer__menu-point" activeClassName="footer__menu-point--active">
                        {page.name}
                    </Link>
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

export default Footer;