console.log("This is module");
function average(...elements) { //not accessible until exported
    let sum = 0;
    elements.forEach((e) => sum += e);
    return sum / elements.length;
}

function sqrt(number) {
    let root = 1;
    if(number<0)
        result = NaN
    else if(number==0)
        result = 0;
    else
    {
        result = 1;
        while(result*result>number+1e-5 || result*result<number-1e-5)
            result = result - (result*result-number)/(2*result);  //using newton's method to solve for result^2-Number=0
    }
    return result;
}



// Exporting things
// module.exports is an object so you can also do it like:
// module.exports.average = average;

module.exports = {
    average: average,
    sqrt: sqrt,
    E: 2.718281828459045,
    LN2: 0.6931471805599453,
    LN10
        :
        2.302585092994046,
    LOG2E
        :
        1.4426950408889634,
    LOG10E
        :
        0.4342944819032518,
    PI
        :
        3.141592653589793,
    SQRT1_2
        :
        0.7071067811865476,
    SQRT2
        :
        1.414213562
}