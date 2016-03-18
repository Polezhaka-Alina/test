//for (var i = 0; i <= 20; i++) {
//    var number = Math.floor(Math.random()*21);
//    if (number % 2 === 0) {
//        result = 'is even';
//    } else {
//        result = 'is odd';
//    }
    //console.log(i + result);
//}


//var n= 9;
//for ( i=0; i <= 10; ++i ) {
//    var rez = n*i;
//    console.log(n + '*' + i + '=' + rez);
//}
//console.log(n + '*' + i + '=' + rez);
//
//for ( n=0; n <= 10; ++n ){
//    for
//        ( i=0; i<=10; ++i ){
//        var rez = n*i;
        //console.log(n + '+' + i + '=' + rez);
//    }
//
//}

//for(i=60; i<=100; i++) {
//
//    function assignGrade(){
//        var assignGrade = i+1;
//    }
//}
//console.log();
function assignGrade(score) {
    if (score > 90) {
        return '5';
    } else if (score > 80) {
        return '4';
    } else if (score > 70) {
        return '3';
    } else if (score > 65) {
        return '2';
    } else {
        return '1';
    }
}

for (var i = 80kjo i <= 100; i++) {
    console.log('For ' + i + ', you got a ' + assignGrade(i));
}

//var wordLetters     = ['Е', 'Л', 'К', 'А'];
//var guessedLetters  = ['_', '_', '_', '_'];
//
//function guessLetter(letter) {
//    var goodGuess = false;
//    var moreToGuess = false;
//    for (var i = 0; i < wordLetters.length; i++) {
//        if (wordLetters[i] == letter) {
//            guessedLetters[i] = letter;
//            goodGuess = true;
//        }
//        if (guessedLetters[i] == '_') {
//            moreToGuess = true;
//        }
//    }
//    if (goodGuess) {
//        console.log('Да, ты угадал букву!');
//        console.log(guessedLetters.join(''));
//        if (!moreToGuess) {
//            console.log('Вы выиграли!');
//        }
//    } else {
//        console.log('Нет, не верно!');
//    }
//}
//
//guessLetter('Е');
//guessLetter('Д');
//guessLetter('Л');
//guessLetter('К');
//guessLetter('А');

