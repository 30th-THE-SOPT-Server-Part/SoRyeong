// console.log('soryeongk');

// setTimeout((): void => {
//     console.log('soryeongk 2');
// }, 3000);

// console.log('soryeongk 3');

// const myStringList: string[] = [];

// setTimeout((name): void => {
//     myStringList = [...myStringList, name];
//     console.log(myStringList);

//     setTimeout((name): void => {
//         myStringList = [...myStringList, name];
//         console.log(myStringList);

//         setTimeout((name): void => {
//             myStringList = [...myStringList, name];
//             console.log(myStringList);
//         }, 1000, '김소령');
//     }, 1500, '소령');
// }, 2000, '령이');

// const condition: boolean = false;

// const myPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve('성공');
//     } else {
//         reject(new Error('에러 발생! condition false'))
//     }
// });

// myPromise
//     .then((res): void => console.log('res', res))
//     .catch(err => console.log(err));

// Promise.resolve(8080)
//     .then(res => {
//         console.log(res); // 8080
//         return 3000;
//     })
//     .then(res => {
//         console.log(res); // 3000
//         return Promise.resolve(8080); 
//     })
//     .then(res => {
//         console.log(res); // 8080
//         return 8080;
//     });

// Promise.resolve(8080)
//     .then(res => {
//         console.log(res); // 8080
//         return 3000;
//     })
//     .then(res => {
//         console.log(res); // 3000
//         return 8080;
//     })
//     .then(res => {
//         console.log(res); // 8080
//         return 8080;
//     });

// Promise.reject(new Error('[ERROR] 에러 나써!!'))
//     .then(res => {
//         console.log(res);
//         return 3333;
//     })
//     .catch(err => {
//         console.log(err.message);
//         return 8080;
//     })
//     .then(res => {
//         console.log(res);
//     });


// const restaurant = (callback: () => void, time: number) => {
//     setTimeout(callback, time);
// }

// const order = (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         restaurant(() => {
//             console.log('[레스토랑 진행 상황] 음식 주문');
//             resolve('음식 주문 시작');
//         }, 1000);
//     });
// }

// const cook = (progress: string): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         console.log('[레스토랑 진행 상황] 음식 조리');
//         restaurant(() => {
//             resolve(`${progress} -> 음식 조리 중`);
//         }, 2000);
//     });
// }

// const serving = (progress: string): Promise<string>  => {
//     return new Promise((resolve, reject) => {
//         console.log('[레스토랑 진행 상황] 음식 서빙');
//         restaurant(()=> {
//             resolve(`${progress} -> 음식 서빙 중`);
//         }, 3000);
//     });
// }

// const eat = (progress: string): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         console.log('[레스토랑 진행 상황] 음식 먹기');
//         restaurant(() => {
//             resolve(`${progress} -> 음식 먹는 중`);
//         }, 4000);
//     });
// }

// order()
//     .then(progress => cook(progress))
//     .then(progress => serving(progress))
//     .then(progress => eat(progress))
//     .then(progress => console.log(progress));

// Promise.resolve(8080)
//     .then(res => {
//         throw new Error('[ERROR] 에러 나써!!');
//         return 3333;
//     })
//     .then(res => {
//         console.log(res);
//         return Promise.resolve(3000);
//     })
//     .catch(err => {
//         console.log(err.message);
//     });

// let asyncFunction1 = (msg: string): Promise<string> => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`asyncFunction1 - ${msg}`);
//         }, 1000);
//     });
// };

// let asyncFunction2 = (msg: string): Promise<string> => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`asyncFunction2 - ${msg}`);
//         }, 1500);
//     });
// };

// const asyncMain = async (): Promise<void> => {
//     let result = await asyncFunction1('hi');
//     console.log(result);
//     result = await asyncFunction2('hello');
//     console.log(result);
// };

// const promiseMain1 = (): void => {
//     asyncFunction1('hi').then((result: string) => {
//         console.log(result);
//         return asyncFunction2('hello');
//     }).then((result: string) => {
//         console.log(result);
//     });
// };

// // asyncMain();

// promiseMain1();

let asyncFunction1 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc1 - ${msg}`);
        }, 1000);
    });
}

let asyncFunction2 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc2 - ${msg}`);
        }, 1500);
    });
}

// 함수명 - 인자 string Promise<string> 반환

// let promiseMain1 = (): void => {
//     asyncFunction1('server part').then((result: string) => {
//         console.log(result);
//         return asyncFunction2('채정아');
//     }).then((result: string) => {
//         console.log(result);
//     });
// }

// promiseMain1();

const asyncMain = async () => {
    let result = await asyncFunction1('soryeongk');
    console.log(result);
    result = await asyncFunction2('령이');
    console.log(result);
}

asyncMain();