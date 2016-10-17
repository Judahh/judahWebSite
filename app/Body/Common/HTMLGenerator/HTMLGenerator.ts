export class HTMLGenerator {
  type?: string;
  name?: string;
  info?: string;
  subDiv: Array<HTMLGenerator>;

  getHTML(){
    let html:string = '<div '+this.type+'="'+this.name+'">';

    for (let div of this.subDiv) {
        html+=div.getHTML;
    }

    html+=this.info+'</div>'

    return html;
  }
}
