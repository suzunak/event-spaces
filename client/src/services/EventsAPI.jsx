const getAllEvents = async () => {
    try {
        const response = await fetch('/api/events');
        const data = await response.json();

        console.log('Recieved all events: ', data);
        return data;
    } catch (error) {
        console.error('Error fetching events: ', error);
    }
}

const getEventsById = async (id) => {
    try {
        const response = await fetch(`/api/events/${id}`);
        const data = await response.json();

        console.log('Recieved event: ', data);
        return data;
    }
    catch (error) {
        console.error('Error fetching event: ', error);
    }
}

const getEventsByLocationId = async (locationId) => {
    try {
        const response = await fetch(`/api/locations/${locationId}/events`);
        const data = await response.json();

        console.log('Recieved events by location: ', data);
        return data;
    } catch (error) {
        console.error('Error fetching events by location: ', error);
    }
}

export default { getAllEvents, getEventsById, getEventsByLocationId };
