exports.SumOfArray = function(arrayOfNums){
	
	if(!(arrayOfNums.constructor === Array)){
		return NaN;
	}
	
	var sum_Total = 0;
	var length  = arrayOfNums.length;
	var i =0;
	for(i=0;i<length;i++){
		sum_Total += arrayOfNums[i];
	}
	return  sum_Total;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	if(!(arrayOfNums.constructor === Array)){
		return NaN;
	}
	
	var sum  = 0;
	var i=0;
	var length = arrayOfNums.length;
	var tracedObjs = new Object();
	for(i=0;i<length;i++){
		var number = arrayOfNums[i];
		if(tracedObjs[number] == null){
			sum += number;
			tracedObjs[number] = true;
		}
	}
	return sum;
}

//2-D array exercises
// Given a 2-d array, verify it is of equal dimensions and return
// the sum of diagonal elements.

exports.SumOfDiagonalCells = function(array2d){
	if(!(array2d.constructor === Array)){
		return NaN
	}
	var noRows = array2d.length;
	var sum = 0;

	for(var i = 0; i < noRows; i++){

		if( !(array2d[i].constructor === Array) || array2d[i].length != noRows){
			return NaN;
		}

		sum += array2d[i][i];
	}
	return sum;

}
