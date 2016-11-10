"use strict";
class hTMLGenerator {
    constructor(type, name, info) {
        this.subDiv = new Array();
        this.type = type;
        this.name = name;
        this.info = info;
    }
    getHTML() {
        let html = '<div ' + this.type + '="' + this.name + '">';
        for (let div of this.subDiv) {
            html += div.getHTML;
        }
        html += this.info + '</div>';
        return html;
    }
}
exports.hTMLGenerator = hTMLGenerator;
//# sourceMappingURL=hTMLGenerator.js.map