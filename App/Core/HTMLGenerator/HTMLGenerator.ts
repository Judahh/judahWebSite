export class hTMLGenerator {
  public type: string;
  public name: string;
  public info?: string;
  
  public subDiv?: Array<hTMLGenerator>;

  public constructor(type:string, name: string, info?:string){
      this.subDiv=new Array<hTMLGenerator>();
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
