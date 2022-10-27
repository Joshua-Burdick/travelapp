export default class Storage {
    constructor() {}

    // Get an item from local storage
    static get(item) {
        localStorage.getItem(item);
    }

    // Set/Create a var in local storage and give/init to a value
    static set(item, val) {
        localStorage.setItem(item, val);
    }

    // Remove an item from local storage
    static remove(item) {
        localStorage.removeItem(item);
    }

    // Clears local storage
    static clear() {
        localStorage.clear();
    }

    // Returns the key at the associated index in storage
    static key(ind) {
        localStorage.key(ind);
    }
}