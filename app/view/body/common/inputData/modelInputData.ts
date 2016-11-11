import { ModelComboBox } from './../textInput/ModelComboBox';
import { ModelTextInput } from './../textInput/ModelTextInput';
import { ModelClickButton } from './../textInput/ModelClickButton';
import { ModelCheckButton } from './../textInput/ModelCheckButton';

export class ModelInputData {
    modelComboBox:ModelComboBox;
    modelTextInput:ModelTextInput;
    modelClickButton:ModelClickButton;
    modelCheckButton:ModelCheckButton;
    
    private exists(object:any) {
        return !((object==null)||(object==undefined));
    }

    isModelComboBox(){
        return this.exists(this.ModelComboBox);
    }

    isModelTextInput(){
        return this.exists(this.ModelTextInput);
    }

    isClickButton(){
        return this.exists(this.ModelClickButton);
    }

    isCheckButton(){
        return this.exists(this.ModelCheckButton);
    }
}
