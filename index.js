// code your solution here

// 1st code
function saturdayFun(defaultActivity1 = "roller-skate") {
    return `This Saturday, I want to ${defaultActivity1}!`;
    };

    saturdayFun();
    saturdayFun("bathe my dog");
  
// 2nd code
function mondayWork(defaultActivity2 = 'go to the office') {
    return `This Monday, I will ${defaultActivity2}.`;
};
    mondayWork('work from home');

// 3rd code
// function wrapAdjective(defaultOuter = 'My genius!') {
//     function(defaultInner = 'special'){
//         return `You are ${defaultInner}`

//     };
// };
 const wrapAdjective = (flair = '*') => {
     return (str = 'special') => {
        return `You are ${flair}${str}${flair}!`
     }
 }