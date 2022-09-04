var { input } = require('./input');
const numbers = {
    0: [1, 1, 1, 0, 1, 1, 1],
    1: [0, 0, 1, 0, 0, 1, 0],
    2: [1, 0, 1, 1, 1, 0, 1],
    3: [1, 0, 1, 1, 0, 1, 1],
    4: [0, 1, 1, 1, 0, 1, 0],
    5: [1, 1, 0, 1, 0, 1, 1],
    6: [1, 1, 0, 1, 1, 1, 1],
    7: [1, 0, 1, 0, 0, 1, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1],
};
let digitToLetter;
let allOfDigets = 0;
let one;
let six;
let zero;
let five;

for (let { signal, output } of input) {
    digitToLetter = {
        0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [],
    }
    let allSegments = signal.concat(output);
    one = []
    six = []
    zero = []
    five = []
    Find0Digit(allSegments)
    Find25Digit(allSegments)
    FindNumber04(allSegments)
    Find3Digit(allSegments)
    Find4Digit(allSegments)
    FindNumber93(allSegments)
    FindLast6Digit(['a','b','c','d','e','f','g'])
    let out = ReadOutput(output)
    console.log(out)
    allOfDigets += out
}

function Find0Digit(segments) {
    let seven = []
    for (let i = 0; i < segments.length; i++) {
        if (seven.length != 0 && one.length != 0) { break }
        let long = segments[i].length;
        if (long == 2) {
            one = segments[i].split('');
        }
        if (long == 3) {
            seven = segments[i].split('');
        }
    }
    digitToLetter[0] = DifferentSegment(one, seven);
}

function Find25Digit(segments) {
    for (let i = 0; i < segments.length; i++) {
        let long = segments[i].length;
        if (long == 6) {
            six = segments[i].split('');
            if (!one.every(v => six.includes(v))) {
                digitToLetter[2] = NotInCluead(six, one);
                digitToLetter[5] = NotInCluead(digitToLetter[2], one)
                break
            }
        }
    }
}

function Find3Digit(segments) {
    let eight = [];
    for (let i = 0; i < segments.length; i++) {
        let long = segments[i].length;
        if (long == 7) {
            eight = segments[i].split('');
        }
    }
    digitToLetter[3] = DifferentSegment(zero, eight)
}

function FindNumber04(segments) {
    let four = []
    for (let i = 0; i < segments.length; i++) {
        if (four.length != 0) { break }
        let long = segments[i].length;
        if (long == 4) {
            four = segments[i].split('');
        }
    }
    for (let i = 0; i < segments.length; i++) {
        let long = segments[i].length;
        if (long == 6) {
            zero = segments[i].split('');
            if (!four.every(v => zero.includes(v)) && !zero.every(v => six.includes(v))) {
                break
            }
        }
    }
}

function Find4Digit(segments) {
    for (let i = 0; i < segments.length; i++) {
        let long = segments[i].length;
        if (long == 5) {
            five = segments[i].split('');
            if (DifferentSegment(five, six).length == 1) {
                digitToLetter[4] = DifferentSegment(five, six)
                break
            }
        }
    }
}


function FindNumber93(segments) {
    let nine = []
    let three = []
    for (let i = 0; i < segments.length; i++) {
        let long = segments[i].length;
        if (long == 6) {
            nine = segments[i].split('');
            if (!nine.every(v => zero.includes(v)) && !nine.every(v => six.includes(v))) {
                break
            }
        }
    }
    for (let i = 0; i < segments.length; i++) {
        let long = segments[i].length;
        if (long == 5) {
            three = segments[i].split('');
            if (!three.every(v => five.includes(v)) && DifferentSegment(three, nine).length == 1) {
                digitToLetter[1] = DifferentSegment(three, nine);
                break
            }
        }
    }
}

function FindLast6Digit(list) {
    var newList = [];
    for (let i = 0; i < 7; i++) {
        newList.push(...digitToLetter[i]);
    }
    digitToLetter[6] = DifferentSegment(list, newList);
}



function NotInCluead(array, target) {
    return target.filter(x => !array.includes(x));
}

function DifferentSegment(array, target) {
    return target
        .filter(x => !array.includes(x))
        .concat(array.filter(x => !target.includes(x)));
}

function ReadOutput(output) {
    let endResult = [];
    for (let i = 0; i < output.length; i++) {
        let number = [0, 0, 0, 0, 0, 0, 0];
        let segment = output[i].split('')
        for (s of segment) {
            for (let i = 0; i < 7; i++) {
                if (s === digitToLetter[i][0]) {
                    number[i] = 1
                }
            }
        }
        for (let i = 0; i < 10; i++) {
            if (numbers[i].every((val, index) => val === number[index])) {
                endResult.push(i)
            }
        }
    }
    return parseInt(endResult.join(''))
}


console.log(digitToLetter, allOfDigets);