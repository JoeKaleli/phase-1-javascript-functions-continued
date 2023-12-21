// code solution here
function saturdayFun(activity = 'roller-skate' ) {
    return (`This Saturday, I want to ${activity}!`);

}

console.log(saturdayFun());
console.log(saturdayFun('have fun'));


const mondayWork = function(activity = 'go to the office') {
    return `This mondayWork, I will ${activity}!`
};

console.log(mondayWork())
console.log(mondayWork('work on projects'))


function wrapAdjective(name) {
    const innerFunction = function(msg = 'special') {
        return `${name}, You are ${msg}`;
    }
    return innerFunction('hardworking');
}
console.log(wrapAdjective('Joe'))