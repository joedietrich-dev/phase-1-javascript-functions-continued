function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function mw(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*') {
  return function subjectInput(subject) {
    return `You are ${flair}${subject}${flair}!`;
  }
}