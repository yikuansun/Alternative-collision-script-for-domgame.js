HTMLElement.prototype.rectCollision = function(otherobject){
    item1 = this;
	item2 = otherobject;
    return (
        parseFloat(item1.style.bottom) + parseFloat(item1.style.height) >= parseFloat(item2.style.bottom) &&
        parseFloat(item1.style.left) + parseFloat(item1.style.width) >= parseFloat(item2.style.left) &&
        parseFloat(item1.style.bottom) <= parseFloat(item2.style.bottom) + parseFloat(item2.style.height) &&
        parseFloat(item1.style.left) <= parseFloat(item2.style.left) + parseFloat(item2.style.width)
    )
};