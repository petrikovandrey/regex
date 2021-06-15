 export class Validator {
    constructor(name) {
        this.name = name;
    }
    validateUsername() {
        console.log(this.name);
        let c = /^[a-zA-Z0-9_-]+$/.test(this.name); 
        let f = /([0-9])\1{3,}/.test(this.name);
        let s = /^[a-zA-Z]+.+[a-zA-Z]$/.test(this.name);
       
        if (c & s & !f) {
            return true;
        }
        else {
            return false;
        }
    }
}
