import { ModelItem } from './../item/ModelItem';

export class ModelCheckButton {
    radio:boolean;
    checked:boolean;
    name:string;
    value:string;
    item:ModelItem;
    type:string;
    onClick:any;

    public type(){
        if(this.radio){
            return "radio";
        }else{
            return "checkbox"
        }
    }
}
