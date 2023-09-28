import classes from './MainNavigation.module.css';

import { NavLink } from 'react-router-dom';

export const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => {
								return isActive ? classes.active : undefined;
							}}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/products"
							className={({ isActive }) => {
								return isActive ? classes.active : undefined;
							}}>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
