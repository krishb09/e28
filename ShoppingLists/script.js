// The Vue instance
let app = new Vue({
    //initializing new instance of Vue
    // Options
    el: '#app',
    data: {
        item: '',
        qty: '',
        items: [],
        itemsCount: 0,
    },

    methods: {
        addItem() {
            this.items.push({
                name: this.item,
                qty: this.qty
            });
            this.itemsCount += this.qty;

            //clear inputs
            this.item = '';
            this.qty = ''
        }
    }

})