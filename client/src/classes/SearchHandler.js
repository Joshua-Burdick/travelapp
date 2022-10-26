export default class SearchHandler {
    SearchHandler() {}

    validateSearch(country, state, city) {
        if (country == "" && state == "" && city == "") return false;
        else return true;
    }
}