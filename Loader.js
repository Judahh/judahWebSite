document.addEventListener('mousemove', mouseTooltip, false);
function mouseTooltip(event) {
    var body = document.body, html = document.documentElement;
    var height = Math.max(html.clientHeight);
    var tooltip = document.querySelectorAll('.DivClassTooltip');
    for (var i = 0; i < tooltip.length; i++) {
        tooltip[i].style.left = event.pageX + 'px';
        if (isBottom(tooltip[i])) {
            tooltip[i].style.top = (event.pageY - (height - (isBottom(tooltip[i])))) + 'px';
        }
        else {
            tooltip[i].style.top = event.pageY + 'px';
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
System.import('SystemConfig.js').then(function () {
    System.import('Main');
}).catch(console.error.bind(console));
//# sourceMappingURL=Loader.js.map