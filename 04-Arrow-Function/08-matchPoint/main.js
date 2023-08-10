//V.1 less code

let calcPoint = (win, draw = 0, lose = 0) => {
    return ((win * 3) + (draw * 1) + (lose * 0));
}

//V.2 more guard but for what ???

// let calcPointV2 = (win, draw = 0, lose = 0) => {
//     let check = typeof(win) == 'string' ||typeof(draw) == 'string'|| typeof(lose) == 'string';

//     let isNan = isNaN(win) ||  isNaN(draw) ||  isNaN(lose);  
//     if(check || isNan )return console.log('Plese Put Only Number')
//     return ((win * 3) + (draw * 1) + (lose * 0));
// }
