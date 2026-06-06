const cl = console.log;

const BASE_URL = `https://jsonplaceholder.typicode.com`

const POSTS_URL = `${BASE_URL}/posts`

const SINGLE_POST_URL = `${BASE_URL}/posts/:id` // here id is params

const TODOS_URL = `${BASE_URL}/todos`
const SINGLE_TODO_URL = `${BASE_URL}/todos/:id` // here id is params
const PHOTOS_URL = `${BASE_URL}/photos`
const SINGLE_PHOTO_URL = `${BASE_URL}/photos/:id` // here id is params
const USERS_URL = `${BASE_URL}/users`

function add(x, y){
    return x + y
}

add(50, 60)
add(5, 6)

// const MOVIE_URL = `${BASE_URL}/movies/gener-action?cont=SK?lang=hindi`
// const WS_URL = `${BASE_URL}/web-series`


// const express = require('express')

// let app = express()


// app.get('/', (req, res) => {
//      // req read karega
//      // it send a res
// })


// BASE_URL
// END_POINTS
// :PARAMS
// QUERY_PARAMAS ?key=value&key1=value1&key2=value3


// 2XX :: 200 to 299  API Success

// 4XX :: 400 to 499  Error Front End Side Error

// 5XX :: 500 to 599  Error Back End Side Error