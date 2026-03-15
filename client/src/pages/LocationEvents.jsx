import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

    console.log('Index: ', index);

    useEffect(() => {
        (async () => {
            try {
                const locationData = await LocationsAPI.getLocationById(index);
                setLocation(locationData);
                console.log('Location: ', locationData);

                const eventsData = await EventsAPI.getEventsByLocationId(index);
                setEvents(eventsData);
                console.log('Events: ', eventsData);
            } catch (error) {
                throw error;
            }
        })()
    }, [index])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.city}, {location.state}</p>
                    <p>{location.description}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents