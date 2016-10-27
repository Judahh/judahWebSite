export namespace Utils {
    export function getFileName(filename:string){
        var names:string[]=filename.split("/");
        return names[names.length-1].split(".")[0];
    }

    export function getFileHTML(fileName:string){
        return fileName+".html";
    }

    export function getFileCSS(fileName:string){
        return fileName+".css";
    }

    export function getFileSelector(fileName:string){
        fileName=fileName.replace("Component","");
        return fileName.charAt(0).toLowerCase()+fileName.substring(1,fileName.length);
    }
}