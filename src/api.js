//get object containing city data
export async function getObject(city) {
    try {
        const apiKey = 'a6eac61628c24a91b47135609241701';
        const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
        const requestObj = await request.json();
        return requestObj;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

export async function getPhoto(query) {
    try {
        const apiKey = 'RnpP71PTAWau2IgRjVRZJ5z1oSGR2fE-ucm6Scb_NtY';
        const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
        const request = await fetch(apiUrl);
        const requestObj = await request.json();
        return requestObj;
    } catch (error) {
        console.error('Error fetching image', error);
        throw error;
    }
}