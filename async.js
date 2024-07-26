// function fetchData(callback) {
//     setTimeout(() => {
//         const data = "Fetched Data";
//         callback(null, data);
//     }, 1000);
// }
// fetchData((error, result) => {
//     if (error) {
//         console.error("Error fetching data:", error);
//     } else {
//         console.log("Data received:", result);
//     }
// });

//promises
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Fetched Data");
//         }, 1000);
//     });
// }
// fetchData()
//     .then(result => {
//         console.log("Data received:", result);
//     })
//     .catch(error => {
//         console.error("Error fetching data:", error);
//     });

// online json data (https://jsonplaceholder.typicode.com/)
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// local json data
fetch('data.json')
.then(response => response.json())
.then(json => console.log(json))

// json methods
// JSON.stringify() // convert javascript object to JSON
// JSON.parse() // convert JSON to javascript object