export class User {
    name: string;
    username: string;
    email: string;
    password: string;

    constructor(init?:Partial<User>) {
        Object.assign(this, init);
    }

    get isValid(): boolean {
         return (this.name && this.name.length > 0) 
            && (this.username && this.username.length > 0)
            && (this.email && this.email.length > 0)
            && (this.password && this.password.length > 0);
    }

    get hasValidEmail(): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.email);
    }

}