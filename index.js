// //----------------- HOMEWORK - BUOI 14 --------------------
/* --------------- CÂU 1 : -----------------------
var dig1 = 9;
var dig2 = 2;
var dig3 = 21;
var temp;
if (dig1 > dig2) {
    temp = dig1;
    dig1 = dig2;
    dig2 = temp;
}
if (dig1 > dig3) {
    temp = dig1;
    dig1 = dig3;
    dig3 = temp;
}

if (dig2 > dig3) {
    temp = dig2;
    dig2 = dig3;
    dig3 = temp;
}
console.log('Theo thu tu tang dan: ', dig1, dig2, dig3);*/

/* --------------- CÂU 2: -----------------------
var father = 'B';
var mother = 'M';
var brother = 'A';
var sister = 'E';
var myself = 'A';
switch (myself) {
    case 'B':
        console.log('Con chào bố ạ ^^');
        break;
    case 'M':
        console.log('Con chào mẹ yêu ');
        break;
    case 'A':
        console.log('Chào anh zai của em ');
        break;
    case 'E':
        console.log('Chào chị gái xinh đẹp');
        break;
    default:
        console.log('Vui lòng nhập đúng thông tin!');
        break;
}*/


/* --------------- CÂU 3: -----------------------
var dig1 = 1;
var dig2 = 3;
var dig3 = 19;
var countLe = 0, countChan = 0;

if (dig1 > 0 && (dig1 % 2 === 0)) {
    countChan++;
}
if (dig1 % 2 === 1) {
    countLe++;
}
if (dig2 > 0 && (dig2 % 2 === 0)) {
    countChan++;
}
if (dig2 % 2 === 1) {
    countLe++;
}
if (dig3 > 0 && (dig3 % 2 === 0)) {
    countChan++;
}
if (dig3 % 2 === 1) {
    countLe++;
}
console.log('Tổng các số lẻ: ', countLe);
console.log('Tổng các số chẵn: ', countChan);*/


/* --------------- CÂU 4: -----------------------
var a = 5;
var b = 6;
var c = 7;
if (a === b && b != c && a != c) console.log('Tam giác cân')
else if (a === b && b === c && a === c) console.log('Tam giác đều ');
else if (b === a + 1 && c === b + 1) console.log('Tam giác vuông');
else {
    console.log('Tam giác thường')
}   */