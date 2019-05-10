import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
	return (
		<div>
			<h5><Link to='/'>Volver</Link></h5>
		</div>
	)
};

export default Header;