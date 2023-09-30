import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

export function EventsPage() {
	const events = useLoaderData();

	return (
		<>
			<EventsList events={events} />
		</>
	);
}

export const eventsLoader = async () => {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
	} else {
		const resData = await response.json();
		return resData.events;
	}
};
