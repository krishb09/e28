export default class Favorites {
    /**
     *
     */
    constructor() {
        // Extract JSON cart string from local storage
        let favorite = localStorage.getItem("favorite");

        // Parse JSON cart String to `items` object
        this.favorites = (favorite) ? JSON.parse(favorite) : [];
    }

    /**
     * Getter method for items
     */
    getFavorites() {
        return this.favorites;
    }

    /**
     * Updates cart in localstorage
     */
    update() {
        localStorage.setItem("favorite", JSON.stringify(this.favorites));
    }

    /**
     * Add a new item of the given id
     */
    add(id) {
        // First see if product is already present
        let item = this.getItem(id);

        if (item) {
            console.log("already added");
        } else {
            // Product not in cart, add as new item
            this.favorites.push({
                id: id,
            });
        }

        this.update();
    }

    /**
     * Remove an item from items via id
     */
    remove(id) {
        let item = this.getItem(id);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via id
     * Returns null if product does not exist in items
     */
    getItem(recipeId) {
        return this.favorites.find(({ id }) => id === recipeId) || null;
    }
}