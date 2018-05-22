export class User {
    name: string;
    username: string;
    email: string;
    password: string;

    constructor(init?:Partial<User>) {
        Object.assign(this, init);
    }

    get isValid():boolean {
        console.log("is valid: ", this)
        return (this.name != undefined 
            && this.username != undefined 
            && this.email != undefined
            && this.password != undefined);
    }

    get hasValidEmail(): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.email);
    }

}