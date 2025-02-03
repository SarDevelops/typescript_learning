
// sync Programming

import log from "./utils";

function task1() {
    console.log('task 1');
}
function task2() {
    console.log('task 2');
}
task1();
task2();


// async Programming

// function task3() {
//     setTimeout(() => {
//         log('task 3')
//     }, 1000);
// }
// function task4() {
//     console.log('task 4');
// }
// task3();
// task4();

// promises

const fetchData = (value: boolean): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (value) {
            setTimeout(() => {
                resolve('Data fetch successfully');
            }, 2000);
        } else {
            reject('Error Found');
        }
    });
};

fetchData(true)
    .then((data) => {
        console.log(data);
        return 'get more data';
    })
    .then((moreData) => { // chaining
        log('moreData:' + moreData);
    })
    .catch((error) => {
        console.log(error);
    });


// async await

async function fetchNewData(value: boolean): Promise<string> {
    return 'Data fetch';
}
fetchNewData(true)
    .then(data => {
        log(data);
    })
    .catch(error => {
        log(error);
    })

async function getData(): Promise<void> {
    try {
        const data = await fetchNewData(false);
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

console.log(getData());

// working with api using fetch

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
// async function fetchPosts(): Promise<Post[]> {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         // json Data
//         const posts: Post[] = await response.json();
//         return posts;
//     } catch (error) {
//         console.log(error);
//         throw (error);
//     }

// }

// fetchPosts().then((data) => {
//     console.log('Posts fetched', data);
// }).catch(() => (
//     console.log('Error fetching posts')
// ))

// concurrent promises with Promise.all


async function tk1() {
    console.log('tk 1');
    return 'tk1';
}
async function tk2() {
    console.log('tk 2');
    return 'tk2';
}
async function fetchAllData(): Promise<[string, string]> {
    const [data1, data2] = await Promise.all([
        tk1(),
        tk2(),
    ]);
    return [data1, data2];
}

fetchAllData().then((result) => {
    console.log(result[1]);
}).catch((err) => {
    console.log(err);
});