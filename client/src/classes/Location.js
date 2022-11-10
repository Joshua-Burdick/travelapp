export default class Location {

    constructor() {}

    // Get the coords of the location
    static latitude(location) {
        return location.geometry.location.lat();
    }

    static longitude(location) {
        return location.geometry.location.lng();
    }

    static coords(location) {
        return {
            lat: this.latitude(location),
            lng: this.longitude(location)
        }
    }
}