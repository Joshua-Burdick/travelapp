export default class SearchHandler {
    constructor() {}

    validateSearch(country, city) {
        if (country == "" && city == "") {
            return false;
        }
        else return true;
    }
}