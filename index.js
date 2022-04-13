// code your solution here

function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!";
}

saturdayFun(activity);

//

function mondayWork(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";
};

mondayWork(activity);

//

function wrapAdjective(wrap = "*") {
    return function (string = "special") {
        return `You are ${wrap}${string}${wrap}!`
    };
}
  
console.log(wrapAdjective("||")("a dedicated programmer"));