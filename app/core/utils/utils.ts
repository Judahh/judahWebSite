export class Utils {
    static getFileName(filename:string){
        var names:string[]=filename.split("/");
        return names[names.length-1].split(".")[0];
    }

    static getFileJSON(fileName:string){
        return fileName+".json";
    }

    static getFileHTML(fileName:string){
        return fileName+".html";
    }

    static getFileCSS(fileName:string){
        return fileName+".css";
    }

    static getFileSelector(fileName:string){
        fileName=fileName.replace("Component","");
        return fileName.charAt(0).toLowerCase()+fileName.substring(1,fileName.length);
    }

    static gregorianAge(birthDate:any, ageAtDate?:any) {
        // convert birthDate to date object if already not
        if (Object.prototype.toString.call(birthDate) !== '[object Date]')
        birthDate = new Date(birthDate);

        // use today's date if ageAtDate is not provided
        if (typeof ageAtDate == "undefined")
        ageAtDate = new Date();

        // convert ageAtDate to date object if already not
        else if (Object.prototype.toString.call(ageAtDate) !== '[object Date]')
        ageAtDate = new Date(ageAtDate);

        // if conversion to date object fails return null
        if (ageAtDate == null || birthDate == null)
        return null;


        var _m = ageAtDate.getMonth() - birthDate.getMonth();

        // answer: ageAt year minus birth year less one (1) if month and day of
        // ageAt year is before month and day of birth year
        return (ageAtDate.getFullYear()) - birthDate.getFullYear() 
        - ((_m < 0 || (_m === 0 && ageAtDate.getDate() < birthDate.getDate())) ? 1 : 0)
    }
}