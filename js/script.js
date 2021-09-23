const app = new Vue({
    el: "#root",
    data: {
        images : [
            "https://www.newyorkwelcome.net/ecms/image/gotham-city.jpg",
            "https://www.iss.europa.eu/sites/default/files/styles/large_banner_image/public/city-5000648_1920%20banner.jpg?itok=2VD5CQf5?%3E",
            "https://static.bimago.com/mediacache/catalog/product/cache/0/6/90560/image/750x1120/d247b4f7d08d4377f53fec49ecefc8b2/90560_1.jpg"
        ],

        imgIndex: 0

    },

    methods: {
        rightImage: function() {
            this.imgIndex++;
            if( this.imgIndex >= this.images.length) {
                this.imgIndex = 0;
            }
        },

        leftImage: function() {
            this.imgIndex--;
            if ( this.imgIndex < 0 ) {
                this.imgIndex = this.images.length -1;
            }
        },

    }
})