import { ModelTextInput } from './../textInput/ModelTextInput';
import { ModelComboBox } from './../textInput/ModelComboBox';
import { ModelClickButton } from './../textInput/ModelClickButton';
import { ModelCheckButton } from './../textInput/ModelCheckButton';

export class ModelInputData {
    modelTextInput:ModelTextInput;
    modelComboBox:ModelComboBox;
    modelClickButton:ModelClickButton;
    modelCheckButton:ModelCheckButton;
    
    private exists(object:any) {
        return !((object==null)||(object==undefined));
    }

    isModelTextInput(){
        return this.exists(this.ModelTextInput);
    }

    isModelComboBox(){
        return this.exists(this.ModelComboBox);
    }

    isClickButton(){
        return this.exists(this.ModelClickButton);
    }

    isCheckButton(){
        return this.exists(this.ModelCheckButton);
    }
}
