export default class SearchHandler {
    constructor() {}

    validateSearch(country, state, city) {
        if (country == "" && state == "" && city == "") {
            return false;
        }
        else return true;
    }
}