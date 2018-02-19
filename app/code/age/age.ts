import { AppObject, Component, ComponentPageBody } from 'backappjh';

export class Age extends AppObject {
    constructor(father?: Component) {
        super(father);
    }

    public run() {
        this.father.getElement().innerHTML = "" + this.getAge();
    }

    public getAge() {
        var today = new Date();
        var birthDate = new Date("07/01/1992");
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}