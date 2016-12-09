import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelInputData } from './../inputData/ModelInputData';

export class BasicFormElement {

    constructor(private modelInputData:ModelInputData) { }

    toFormGroupElements(group: any) {
        if(this.modelInputData!=undefined && this.modelInputData!=null){

            if(this.modelInputData.comboBox!=undefined && this.modelInputData.comboBox!=null){
                group[this.modelInputData.comboBox.name] = this.modelInputData.comboBox.required? 
                    new FormControl(this.modelInputData.comboBox.value || '', Validators.required) : 
                    new FormControl(this.modelInputData.comboBox.value || '');
            }

            if(this.modelInputData.textInput!=undefined && this.modelInputData.textInput!=null){
                group[this.modelInputData.textInput.name] = this.modelInputData.textInput.required? 
                    new FormControl(this.modelInputData.textInput.value || '', Validators.required) : 
                    new FormControl(this.modelInputData.textInput.value || '');
            }

            if(this.modelInputData.checkButton!=undefined && this.modelInputData.checkButton!=null){
                // console.log("name:"+this.modelInputData.checkButton.name);
                // console.log("value:"+this.modelInputData.checkButton.value);
                // console.log("checked:"+this.modelInputData.checkButton.checked);
                if(this.modelInputData.checkButton.checked){
                //     console.log("checkedT:"+this.modelInputData.checkButton.checked);
                    group[this.modelInputData.checkButton.name] = this.modelInputData.checkButton.required? 
                        new FormControl(this.modelInputData.checkButton.value || '', Validators.required) : 
                        new FormControl(this.modelInputData.checkButton.value || '');
                }else{
                    group[this.modelInputData.checkButton.name] = this.modelInputData.checkButton.required? 
                        new FormControl(Validators.required) : 
                        new FormControl();
                }
            }
        }

        return group;
    }
}