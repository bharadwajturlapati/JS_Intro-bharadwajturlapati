exports.GetObjectPropertyNames = function(obj) {

	var propertyNames = new Array();

	if(obj === null){
		return null;
	}

	for(var p in obj){
		propertyNames.push(p);

	}

	return propertyNames;

}

exports.GetObjectPropertyValues = function(obj) {

	var propertyValues = new Array();

	if(obj === null){
		return null;
	}

	for(var p in obj){
		propertyValues.push(obj[p]);

	}

	return propertyValues;

}

