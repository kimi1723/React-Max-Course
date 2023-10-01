import { useRouteLoaderData, json, redirect } from 'react-router-dom';

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

export const action = async ({ params, request }) => {
	const eventId = params.id;

	const res = await fetch(`http://localhost:8080/events/${eventId}`, { method: request.method });

	if (!res.ok) {
		throw json({ message: 'Could not delete event.' }, { status: 500 });
	}

	return redirect('/events');
};
