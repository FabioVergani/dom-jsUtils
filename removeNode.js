function removeNode(x){
 const e=x,p=e.parentNode;
 p?p.removeChild(e):e.remove();
}
