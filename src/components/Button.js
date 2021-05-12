import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--large', 'btn--medium'];

export const Button = ({
	children, 
	type, 
	buttonStyle, 
	buttonSize, 
	onClick
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) 
	? buttonStyle 
	: STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize)
	? buttonSize
	: SIZES[1];

	return(
		<Link to ='/sign-in' className='btn-mobile'>
		<button className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
	     onClick = {onClick}
	     type = {type} 
	     >
		  {children}
		</button>
		</Link>
		);
};