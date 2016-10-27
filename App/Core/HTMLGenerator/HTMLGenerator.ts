export class HTMLGenerator {
  public type: string;
  public name: string;
  public info?: string;
  
  public subDiv?: Array<HTMLGenerator>;

  public constructor(type:string, name: string, info?:string){
      this.subDiv=new Array<HTMLGenerator>();
      this.type=type;
      this.name=name;
      this.info=info;
  }

  public getHTML(){
    let html:string = '<div '+this.type+'="'+this.name+'">';

    for (let div of this.subDiv) {
        html+=div.getHTML;
    }

    html+=this.info+'</div>'

    return html;
  }
}
