export default class Favorites {
    /**
     *
     */
    constructor() {
        // Extract JSON cart string from local storage
        let favorite = localStorage.getItem("favorite");

        // Parse JSON cart String to `favorites` object
        this.favorites = (favorite) ? JSON.parse(favorite) : [];
    }

    /**
     * Getter method 
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
 * Returns how many total items are in the cart
 */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.favorites)) {
            sum += this.favorites[key].quantity;
        }
        return sum;
    }

    /**
     * Add a new item of the given id
     */
    add(id, quantity = 1, name) {
        // check if already present
        let item = this.getItem(id);

        if (item) {
            item.quantity += quantity;
        } else {
            // not a favorite, add it
            this.favorites.push({
                id: id,
                quantity: quantity,
                name: name,

            });
        }

        this.update();
    }

    /**
     * Remove an item from items via id
     */
    remove(id) {
        let item = this.getItem(id);

        let itemIndex = this.favorites.indexOf(item);

        if (item) {
            this.favorites.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via id
     */
    getItem(recipeId) {
        return this.favorites.find(({ id }) => id === recipeId) || null;
    }
}