exports.ParseNumber = function(str){
	return (str == null) ? NaN : parseInt(str)
}

exports.ConvertNumberToString = function(num){
	return (typeof num!= 'number')?"":num.toString()
}

exports.ParseDate = function(str){
	return (str ==null || !str) ? NaN : new Date(str)
}

exports.ConvertDateToString = function(dateValue){
	return (!(dateValue instanceof Date)) ? "" : dateValue.toString()
}

//Parse a string containing a comma seperated sequence of numbers
// and return an array containing the numbers. Return NaN for invalid
// numbers in the string.
exports.ParseStringOfNumbers = function(str){
	var arr = new Array();
	if(typeof str != "string" || !str){
		return arr;

	}
	var tempArr = str.split(",");


	for(var i = 0; i < tempArr.length; i++){
		var intVal = parseInt(tempArr[i]);
		arr.push(intVal);
	}

	return arr;
}

exports.ConvertArrayOfNumbersToString = function(obj){
	return (obj instanceof Array) ? "" : obj.toString()

}


exports.ConvertStringToObject = function(str){
	return (typeof str != "string" || !str) ?null:JSON.parse(str);
}

exports.ConvertObjectToString = function(obj){
	return (obj == null) ? "" : JSON/stringify(obj) 

}



