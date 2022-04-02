// 재선언
// const name = '채정아';
// const name = '김소령';

// let age = 26;
// let age = 18;

// var part = '웹';
// var part = '서버';

// 재할당
// const herName = '';
// herName = '정아';

// let myName = '김소령';
// myName = '령이';

// var blah = 'blah';
// blah = 'blahblah';

// 블록 스코프
if (true) {
    var nickname = 'ryeongE';
}
console.log(nickname);

if (true) {
    const maybeError = 'can you hear me?';
    let maybeError2 = 'how about me?';
}
console.log(maybeError);
console.log(maybeError2);

function foo {
    if (true) {
        var variable = 'hello';
        console.log('if block', variable);
    }
    console.log('function block', variable);
}
console.log('global', variable);