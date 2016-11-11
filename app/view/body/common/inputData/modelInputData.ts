import { ModelComboBox } from './../comboBox/ModelComboBox';
import { ModelTextInput } from './../textInput/ModelTextInput';
import { ModelClickButton } from './../clickButton/ModelClickButton';
import { ModelCheckButton } from './../checkButton/ModelCheckButton';

export class ModelInputData {
    comboBox:ModelComboBox;
    textInput:ModelTextInput;
    clickButton:ModelClickButton;
    checkButton:ModelCheckButton;
    
    private exists(object:any) {
        return !((object==null)||(object==undefined));
    }

    isComboBox(){
        return this.exists(this.comboBox);
    }

    isTextInput(){
        return this.exists(this.textInput);
    }

    isClickButton(){
        return this.exists(this.clickButton);
    }

    isCheckButton(){
        return this.exists(this.checkButton);
    }
}
