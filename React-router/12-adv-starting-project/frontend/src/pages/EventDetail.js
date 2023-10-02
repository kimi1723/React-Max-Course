import { Suspense } from 'react';
import { useRouteLoaderData, json, redirect, defer, Await } from 'react-router-dom';

import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

export const EventDetailPage = () => {
	const { event, events } = useRouteLoaderData('event-detail');

	return (
		<>
			<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
				<Await resolve={event}>{loadedEvent => <EventItem event={loadedEvent} />}</Await>
			</Suspense>
			<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
				<Await resolve={events}>{loadedEvents => <EventsList events={loadedEvents} />}</Await>
			</Suspense>
		</>
	);
};

const loadEvents = async () => {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		throw json(
			{ message: 'Could not fetch events.' },
			{
				status: 500,
			},
		);
	} else {
		const resData = await response.json();

		return resData.events;
	}
};

export const loadEvent = async id => {
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
		const resData = await res.json();

		return resData.event;
	}
};

export const loader = async ({ req, params }) => {
	const id = params.id;

	return defer({
		event: await loadEvent(id),
		events: loadEvents(),
	});
};

export const action = async ({ params, request }) => {
	const eventId = params.id;

	const res = await fetch(`http://localhost:8080/events/${eventId}`, { method: request.method });

	if (!res.ok) {
		throw json({ message: 'Could not delete event.' }, { status: 500 });
	}

	return redirect('/events');
};
