exports.ReverseString = function(str){

	var len = str.length;
	var temp = "";
	var i;
	for(i=len-1;i>=0;i--){
		temp = temp.concat(str[i]);
	}

	return temp;

}

// Given a string with lname,fname - return an array with the first names.
// Example: SplitString("Gates,Bill;Jobs,Steve;Page,Larry") should return
// an array ["Bill","Steve","Larry"]

exports.GetFirstNames = function(str){
	if(str == null){
		return null;
	}
	
	var fullNameasArray = str.split(";");

	var firstNameArray = new Array();
	
	var len = fullNameasArray.length

	for(var i = 0; i < len;i++){

		var firstName = fullNameasArray[i].split(",");

		if(firstName.length < 1 || !firstName[1]){
			continue;
		}

		firstNameArray.push(firstName[1]);

	}
	return firstNameArray;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	return (arrayOfStrings instanceof Array)?arrayOfStrings.reverse():NaN;
	

}

// Given an array of sentences, create a paragraph by concatenating all the strings and adding
// full stop (.) after each sentences.
exports.CreateParagraph = function(arrayOfStrings){

	if(arrayOfStrings == null){
		return null;
	}

	var paragraph = "";

	if(arrayOfStrings.length == 0){
		return paragraph;
	}

	for(var i = 0; i < arrayOfStrings.length; i++){
		paragraph += arrayOfStrings[i];

		paragraph += ".";
	}

	return paragraph;
}