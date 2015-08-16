// Given a date in string format, return the day it corresponds to.
exports.GetDay = function(dateString){
	if(dateString == null || !dateString || dateString == undefined){
		return NaN;
	}

	var date = new Date(dateString);

	return date.getDay()
}

