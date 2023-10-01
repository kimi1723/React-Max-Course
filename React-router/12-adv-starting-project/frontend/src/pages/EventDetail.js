import { useRouteLoaderData, json } from 'react-router-dom';

import EventItem from '../components/EventItem';

export const EventDetailPage = () => {
	const data = useRouteLoaderData('event-detail');
	const event = data.event;

	return (
		<>
			<h1>EventDetail</h1>
			<EventItem event={event} />
		</>
	);
};

export const loader = async ({ req, params }) => {
	const id = params.id;
	const URL = `http://localhost:8080/events/${id}`;

	const res = await fetch(URL);

	if (!res.ok) {
		throw json(
			{ message: 'Could not fetch details for selected event.' },
			{
				status: 500,
			},
		);
	} else {
		return res;
	}
};
