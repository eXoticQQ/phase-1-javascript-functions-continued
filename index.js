// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
  
}
saturdayFun()

const mondayWork = function(event = "go to the office") {
    return `This Monday, I will ${event}.`
}
mondayWork


// function wrapAdjective( name = "a hard worker" ) {
//     const part1 = "You are"
//     return function() {
//         return `${part1} *${name}*!`
//     }
// }
// wrapAdjective("||a dedicated programmer")()


function wrapAdjective(star = "*") {
    const part1 = "You are"
    return function(name ="a hard worker") {
        return `${part1} ${star}${name}${star}!`
    }
        
}
wrapAdjective("||")("a dedicated programmer");