
function component() {
    var element = document.createElement('div');
  
    element.innerHTML = '简单的plugin';
    return element;
}
document.body.appendChild(component());