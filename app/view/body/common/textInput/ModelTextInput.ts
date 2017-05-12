import { TextInputType } from './TextInputType';

export class ModelTextInput {
    name:any;
    fontFamily:string;
    fontSize:number;//px
    textInputType:TextInputType;
    placeholder:string;
    arrayOptions:Array<string>;
    required:boolean;
    value:any;

    border:Array<any>;//px
    color:string;
    backgroundColor:string;
    opacity:number;

    arrayPadding:Array<number>;
    arrayMargin:Array<number>;
    
    isField(){
        return this.textInputType==TextInputType.field;
    }

    isArea(){
        return this.textInputType==TextInputType.area;
    }

    isDataList(){
        return this.textInputType==TextInputType.dataList;
    }

    getDataListId(){
        return "dataListId" + this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
}
