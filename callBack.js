function add(intval1,intval2){
    let res = intval1+intval2;
    return res * 12;
};
function sub(intval1,intval2){
    let res = intval1-intval2;
    return res * 12;
};
function mul(intval1,intval2){
    let res = intval1*intval2;
    return res * 12;
};

console.log(mul(2,5));


//Call back function

function operation(value1,value2,functOper){
    let result =functOper(value1,value2);
    return result *12;
};

result = operation(5,2(arrow1,arrow2) => {
    return (arrow1  + arrow2);
});

console.log(result);