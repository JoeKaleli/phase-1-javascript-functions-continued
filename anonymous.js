// code esolution
const fn = function() {
    console.log("Yet more razzling");
};
fn();
function outer(greeting, msg = "It's fine day to learn") {
    const innerFunction =  function ( name, lang = "Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction("student", "Javascript"