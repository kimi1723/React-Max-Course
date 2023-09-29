import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

export const EventRoot = () => {
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	);
};
