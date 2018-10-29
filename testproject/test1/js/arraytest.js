// var obj = {
//     a: 1,
//     b: 2
// }
// let {
//     a,
//     b
// } = obj;
// console.log('a:', a);
// console.log('b:', b);

var obj2 = {
    arr: [
        'Yo.',
        {
            a: 1,
        }
    ]
};

let {
    arr: [greet, {
        a
    }]
} = obj2;
console.log("greet:", greet);
console.log("a:", a);