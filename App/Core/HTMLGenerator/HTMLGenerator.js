"use strict";
var HTMLGenerator = (function () {
    function HTMLGenerator(type, name, info) {
        this.subDiv = new Array();
        this.type = type;
        this.name = name;
        this.info = info;
    }
    HTMLGenerator.prototype.getHTML = function () {
        var html = '<div ' + this.type + '="' + this.name + '">';
        for (var _i = 0, _a = this.subDiv; _i < _a.length; _i++) {
            var div = _a[_i];
            html += div.getHTML;
        }
        html += this.info + '</div>';
        return html;
    };
    return HTMLGenerator;
}());
exports.HTMLGenerator = HTMLGenerator;
//# sourceMappingURL=HTMLGenerator.js.map