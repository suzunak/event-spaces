const getAllLocations = async () => {
    try {
        const response = await fetch('/api/locations');
        const data = await response.json();

        console.log('Recieved all locations: ', data);
        return data;
    } catch (error) {
        console.error('Error fetching locations: ', error);
    }
}

const getLocationById = async (id) => {
    try {
        const response = await fetch(`/api/locations/${id}`);
        const data = await response.json();

        console.log('Recieved location: ', data);
        return data;
    } catch (error) {
        console.error('Error fetching location: ', error);
    }
}

export default { getAllLocations, getLocationById };