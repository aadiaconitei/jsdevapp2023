const { createApp } = Vue;

let vm = createApp({
    data() {
        return {
            fname: "Ion",
            lname: "Popescu",
            address: "Brasov",
            message: "Imi place JavaScript",
           
        }
    },
    methods: {
        myName: function () {
            // return "Eu ma numesc " + this.fname + " " + this.lname + " si sunt din " + this.address;
            return `Eu ma numesc ${this.fname} ${this.lname} 
            si sunt din  ${this.address}`;
        }
    }
}).mount('#app');