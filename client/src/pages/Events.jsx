import { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import Event from '../components/Event'

const Events = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await EventsAPI.getAllEvents();
                setEvents(eventsData);

            } catch (error) {
                console.error('Error fetching events: ', error);
            }
        }) ()
    }, [])

    return (
        <div className='events'>
            {events.map(event => (
                <Event key={event.id} id={event.id} />
            ))}
            <p>Events: {events.length}</p>
        </div>
    )
}

export default Events;