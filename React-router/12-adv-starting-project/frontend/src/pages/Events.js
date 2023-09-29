import { useEffect, useState } from 'react';
import EventsList from '../components/EventsList';

export const EventsPage = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const fetchEvents = async () => {
			const URL = 'http://localhost:8080/events';
			const response = await fetch(URL);
			const data = await response.json();

			setEvents(data.events);
		};

		fetchEvents();
	});

	return (
		<>
			<h1>Events</h1>
			<EventsList events={events} />
		</>
	);
};
