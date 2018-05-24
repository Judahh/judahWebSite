import { AppObject, Component } from 'backappjh';

export class Age extends AppObject {
    private static instance: Age;

    public static getInstance(father?: Component): Age {
        if (!Age.instance) {
            Age.instance = new Age(father);
        }
        return Age.instance;
    }

    constructor(father?: Component) {
        super(father);
    }

    public getAge(component) {
        var today = new Date();
        var birthDate = new Date("07/01/1992");
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        component.father.getElement().innerHTML = '' + age;
    }
}
