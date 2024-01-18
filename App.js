// $.ajax({
//     type: "GET",
//     url: 'https://jsonplaceholder.typicode.com/todos/1',
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (error) {
//         console.log(error);
//     }
// });

// function MyFetch(url) {
//     return new promise((resolve, reject) => {
//         $.ajax({
//             type: "GET",
//             url: url,
//             success: function (data) {
//                 resolve(data)
//             },
//             error: function (error) {
//                 reject(error)
//             }
//         });
//     })
// }

//promise

// function MyFetch(url) {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             type: "GET",
//             url: url,
//             success: function (data) {
//                 resolve(data);
//             },
//             error: function (error) {
//                 reject(error);
//             }
//         });
//     });
// }

// function Click() {
//     const pr = MyFetch('https://jsonplaceholder.typicode.com/todos/1');
//     pr.then((response) => {
//         console.log(response);
//     })((err) => {
//         console.log(err);
//     })
// }
// console.log("end")

// document.addEventListener('DOMContentLoaded', function () {

// });


// Promise.resolve & Promise.reject functions

// const cache = {
//     name: "mirshan muhammed"
// };
// const ConvertTOPromise = (data) => {
//     return new Promise((resolve, reject) => {
//         resolve(data)
//     })
// }

// const rejectFunction = (data) => {
//     return new Promise((resolve, reject) => {
//         reject(data)
//     })
// }

// function getJson(url) {

//     if (cache) {
//         // return ConvertTOPromise(cache)
//         return rejectFunction(cache)
//         // return Promise.resolve(cache)
//         // return Promise.reject(cache)
//     }

//     return fetch(url).then((data) => {
//         return data.json()
//     }).catch((err) => {
//         console.log(err);
//     })
// }

// console.log("requesting 1")
// getJson('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
//     console.log(data)
//     console.log("requesting 2")
//     return getJson('https://jsonplaceholder.typicode.com/todos/2')

// },)
//     // .then((data) => {
//     //     console.log(data)
//     //     console.log("requesting 3")
//     //     return getJson('https://jsonplaceholder.typicode.com/todos/3')
//     // }).then((data) => {
//     //     console.log(data)
//     // })
//     .catch((err) => {
//         console.log("Error", err)
//     })


//Promise.all


// function getJson(url) {
//     return fetch(url).then((data) => {
//         return data.json()
//     }).catch((err) => {
//         console.log(err);
//     })
// }

// function MyAll(promises) {
//     return new Promise((resolve, reject) => {
//         let results = [];
//         let completedCount = 0;

//         promises.forEach((promise, index) => {
//             promise.then((data) => {
//                 results[index] = data;
//                 completedCount++;

//                 if (completedCount === promises.length) {
//                     resolve(results);
//                 }
//             }).catch((error) => {
//                 reject(error);
//             });
//         });

//         if (promises.length === 0) {
//             resolve(results);
//         }
//     });
// }


// const myRace = function (promises) {
//     return new Promise((resolve, reject) => {
//         promises.forEach(async promise => {
//             try {
//                 const ans = await promise;
//                 resolve(ans);
//             } catch (error) {
//                 reject(error);
//             }
//         });
//     });
// };


// const myAllSettled = function (promises) {
//     const res = []
//     return new Promise((resolve, reject) => {
//         promises.forEach(async (promise, index) => {
//             try {
//                 const ans = await promise;
//                 res[index] = { status: 'fulfilled', ans };
//             } catch (error) {
//                 const ans = await promise;
//                 res[index] = { status: 'rejected', ans };
//             } finally {
//                 if (res.length == promises.length) {
//                     resolve(res)
//                 }
//             }
//         });
//     });
// };

// myRace([
//     // Promise.rase([
//     // Promise.allSettled([
//     getJson('https://jsonplaceholder.typicode.com/todos/1'),
//     getJson('https://jsonplaceholder.typicode.com/todos/2'),
//     getJson('https://jsonplaceholder.typicode.com/todos/3')
// ]).then((data) => {
//     console.log(data);
// })




// const promise1 = new Promise((reject, resolve) => {
//     setTimeout(resolve, 900, "mirshan")
// })
// const promise2 = new Promise((reject, resolve) => {
//     setTimeout(resolve, 500, "Ashikh")
// })
// const promise3 = new Promise((reject, resolve) => {
//     setTimeout(resolve, 800, "basil")
// })

// const promises = [promise1, promise2, promise3]


// function rase(promises) {
//     return new Promise((resolve, reject) => {
//         promises.forEach(async element => {
//             try {
//                 const ans = await element;
//                 resolve(ans);
//             } catch (err) {
//                 reject(err)
//             }
//         });
//     })
// }

// function rase(promises) {
//     return new Promise((resolve, reject) => {
//         promises.forEach(element => {
//             element.then((data) => {
//                 resolve(data)
//             }).catch((err) => {
//                 reject(err)
//             })
//         });
//     })
// }

// const myRace = function (promises) {
//     return new Promise((resolve, reject) => {
//         promises.forEach(async promise => {
//             try {
//                 const ans = await promise;
//                 resolve(ans);
//             } catch (error) {
//                 reject(error);
//             }
//         });
//     });
// };

const myAllSettled = function (promises) {
    const Arry = []
    return new Promise((resolve, reject) => {
        promises.forEach(async (promise, index) => {
            try {
                const ans = await promise;
                console.log(ans);
                Arry[index] = { status: 'fulfilled', ans }
            } catch (error) {
                const ans = await promise;
                Arry[index] = { status: 'rejected', ans }
            } finally {
                if (Arry.length == promises.length) {
                    resolve(Arry)
                }
            }
        })
    })
}

// const myAllSettled = function (promises) {
//   const res = []
//   return new Promise((resolve, reject) => {
//     promises.forEach(async promise => {
//       try {
//         const ans = await promise;
//         res.push(ans)
//       } catch (error) {
//         res.push(error)
//       }finally{
//         if(res.length == promises.length){
//           resolve(res)
//         }
//       }
//     });
//   });
// };

const promise1 = new Promise((reject, resolve) => {
    setTimeout(resolve, 900, "mirshan")
})
const promise2 = new Promise((reject, resolve) => {
    setTimeout(reject, 500, "Ashikh")
})
const promise3 = new Promise((reject, resolve) => {
    setTimeout(resolve, 800, "basil")
})

const promises = [promise1, promise2, promise3]

myAllSettled(promises).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("Error:", err);
})

// Promise.allSettled(promises).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })