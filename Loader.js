System.import('systemConfig.js').then(function () {
    System.import('main');
}).catch(console.error.bind(console));
var firstTime = true;
var defaultTooltipMarginTop = "17px";
var defaultTooltipMarginLeft = "7px";
var defaultTooltipOffset = 17;
document.addEventListener('mousemove', mouseTooltip, false);
function mouseTooltip(event) {
    // var body: any = document.body, html = document.documentElement;
    // var height: any = Math.max(html.clientHeight);
    var tooltip = document.querySelectorAll('.DivClassTooltip');
    for (var i = 0; i < tooltip.length; i++) {
        tooltip[i].style.left = event.clientX + 'px';
        tooltip[i].style.top = event.clientY + 'px';
        // if(firstTime){
        //     defaultTooltipMarginTop = tooltip[i].style.marginTop;
        //     defaultTooltipMarginLeft = tooltip[i].style.marginLeft;
        //     // defaultTooltipOffset = parseInt(defaultTooltipMarginTop.replace(/[^\d.-]/g, ''), 10);
        //     console.log("defaultTooltipMarginTop:" + defaultTooltipMarginTop);
        //     console.log("defaultTooltipMarginLeft:" + defaultTooltipMarginLeft);
        //     console.log("defaultTooltipOffset:" + defaultTooltipOffset);
        //     if(defaultTooltipMarginTop!=""){
        //         firstTime=false;
        //     }
        // }
        if (event.clientY + tooltip[i].offsetHeight + defaultTooltipOffset > window.innerHeight) {
            tooltip[i].style.marginTop = "0px";
            tooltip[i].style.marginTop = (-tooltip[i].clientHeight) + "px";
        }
        if (event.clientX + tooltip[i].offsetWidth + defaultTooltipOffset > window.innerWidth) {
            tooltip[i].style.marginLeft = "0px";
            tooltip[i].style.marginLeft = (-tooltip[i].clientWidth) + "px";
        }
        var marginTop = parseInt(tooltip[i].style.marginTop.replace(/[^\d.-]/g, ''), 10);
        if (event.clientY + marginTop - defaultTooltipOffset < 0) {
            tooltip[i].style.marginTop = defaultTooltipMarginTop;
        }
        var marginLeft = parseInt(tooltip[i].style.marginLeft.replace(/[^\d.-]/g, ''), 10);
        if (event.clientX + marginLeft - defaultTooltipOffset < 0) {
            tooltip[i].style.marginLeft = defaultTooltipMarginLeft;
        }
    }
}
function isBottom(element) {
    if (element.parentElement.nodeName == "FOOTER") {
        return element.parentElement.offsetHeight;
    }
    if (element.parentElement == document.documentElement) {
        //alert("nope");
        return false;
    }
    return isBottom(element.parentElement);
}
//# sourceMappingURL=loader.js.map