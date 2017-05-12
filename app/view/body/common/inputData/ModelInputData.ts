import { ModelComboBox } from './../comboBox/ModelComboBox';
import { ModelTextInput } from './../textInput/ModelTextInput';
import { ModelClickButton } from './../clickButton/ModelClickButton';
import { ModelCheckButton } from './../checkButton/ModelCheckButton';
import { ModelItem } from './../item/ModelItem';

export class ModelInputData {
    comboBox:ModelComboBox;
    textInput:ModelTextInput;
    clickButton:ModelClickButton;
    checkButton:ModelCheckButton;
    item:ModelItem;
    width:string;
}
