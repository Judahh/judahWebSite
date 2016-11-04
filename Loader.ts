document.addEventListener('mousemove', mouseTooltip, false);

function mouseTooltip(event:any) {
	var tooltip:any = document.querySelectorAll('.DivClassTooltip');
    for (var i=0; i<tooltip.length; i++) {
        tooltip[i].style.left = event.pageX + 'px';
        tooltip[i].style.top = event.pageY + 'px';
    }
}

System.import('SystemConfig.js').then(function () {
    System.import('Main'); 
}).catch(console.error.bind(console));