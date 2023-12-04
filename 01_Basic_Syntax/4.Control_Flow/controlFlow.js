// if...else 문
let age = 20;
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// switch 문
switch (age) {
    case 18:
        console.log("Eighteen");
        break;
    case 20:
        console.log("Twenty");
        break;
    default:
        console.log("Other age");
        break;
}

// for 반복문
for (let i = 0; i < 5; i++) {
    console.log("Number " + i);
}

// while 반복문
let i = 0;
while (i < 5) {
    console.log("Number " + i);
    i++;
}

// do...while 반복문
do {
    console.log("Number " + i);
    i++;
} while (i < 5);

