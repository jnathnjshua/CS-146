/** "I pledge my honor that I have abided by the Stevens Honor System." - Jonathan Joshua
 */

/**
 * Resets the state of the calculator and the display
 */
var result = 0;
var currentOp = "";
var buffer = 0;
 setDisplay('0');
function resetCalc() {
   // implement
   result = 0;
   currentOp = '';
   buffer = 0;
   setDisplay(0);
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   // implement
   document.getElementById("output").innerHTML = str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   // implement
   return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   // implement
	result = result * 10;
	result = result + num;
	if (result > 999999999) {
		result = 999999999;
	}
	if (result < -999999999) {
	   result = -999999999;
	}
	setDisplay(result.toString());
}


/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   // implement
   if (buffer === 0) {
     buffer = result;
     result = 0;
     currentOp = op;
     setDisplay(result);}
     else {
		 currentOp = op;}
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   // implement
	if (currentOp == "+") {
		result = result + buffer;
	}
	if (currentOp == "-") {
		result = buffer - result;
	}
	if (currentOp == "*") {
		result = result * buffer;
	}
	if (currentOp == "/") {
		if (buffer == 0 && result == 0) {
			setDisplay("ERROR");
			result = buffer = 0;
			return;
		}
		else {
			result = Math.floor(buffer / result);
		}
	}
	if (result > 999999999) {
		result = 999999999;
	}
	if (result < -999999999) {
	   result = -999999999;
	}
	setDisplay(result.toString());
	currentOp = "";
}