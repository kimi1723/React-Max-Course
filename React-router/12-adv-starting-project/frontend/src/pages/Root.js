import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

export const Root = () => {
	const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
				{navigation.state === 'loading' && <p>Loading...</p>}
			</main>
		</>
	);
};
