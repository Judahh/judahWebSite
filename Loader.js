document.addEventListener('mousemove', mouseTooltip, false);
function mouseTooltip(event) {
    var body = document.body, html = document.documentElement;
    var height = Math.max(html.clientHeight);
    var tooltip = document.querySelectorAll('.tooltip');
    for (var i = 0; i < tooltip.length; i++) {
        tooltip[i].style.left = event.pageX + 'px';
        if (isBottom(tooltip[i])) {
            alert(tooltip[i].style.margin);
            tooltip[i].style.top = (event.pageY - (height - (2 * 17))) + 'px';
        }
        else {
            tooltip[i].style.top = event.pageY + 'px';
        }
    }
}
function isBottom(element) {
    if (element.parentElement.className == "bot") {
        return true;
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