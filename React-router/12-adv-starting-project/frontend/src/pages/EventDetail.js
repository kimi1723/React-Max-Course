import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import EventItem from '../components/EventItem';

export const EventDetailPage = () => {
	const params = useParams();
	const [event, setEvent] = useState([]);

	useEffect(() => {
		const fetchEvent = async () => {
			const URL = 'http://localhost:8080/events';
			const response = await fetch(URL);
			const data = await response.json();
			const event = data.events.find(event => event.id === params.id);

			setEvent(event);
		};
		fetchEvent();
	});

	return (
		<>
			<h1>EventDetail</h1>
			<EventItem event={event} />
		</>
	);
};
