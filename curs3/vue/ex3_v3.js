const { createApp } = Vue;
let vm = createApp({
    data() {
        return {
            num1: 300,
            num2: 230,
            total: '',
            styleobj: {
                width: "100px",
                height: "100px",
                backgroundColor: "red"
            },
            hreflink: "https://www.google.com"
        }
    },
    methods: {
        afiseazaTotal: function (event) {
            console.log(event);
            return this.total = this.num1 + this.num2;
        },
        changebgcolor: function () {
            this.styleobj.backgroundColor = "green";
        },
        originalcolor: function () {
            this.styleobj.backgroundColor = "red";
        }
    },
}).mount('#databinding');