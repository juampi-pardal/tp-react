export default class Author {
    readonly name: string;
    readonly lastname: string;

    constructor(name: string, lastname: string) {
        this.name = name;
        this.lastname = lastname;
    }
}