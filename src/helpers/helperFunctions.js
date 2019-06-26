export function plus(a, b) {
  return a + b;
}

export function findItemBy(property, value, itemsList) {

	var findedItem = itemsList.filter(function(item) {
	    return item[property] === value;
	});

	return findedItem;
}