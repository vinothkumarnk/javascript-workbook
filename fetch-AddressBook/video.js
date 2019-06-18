


window.onload = function() {
    getPosts();
  
  }
const getPosts = () =>  {
    return fetch.fetchUrl(`http://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(posts => console.log(posts))
}

const post = {
    title:  'All About Fetch',
    body: 'Fetch is so cool!',
    userId: 1
}

const newPost = post => {
    const options = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content type': 'application/json'
        }
    }
    return fetch.fetchUrl(`http://jsonplaceholder.typicode.com/posts`, options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.error(`Error: ${error}`))
}

// newPost(post);

//This works on the browser - which understands fetch. Use F12 to see it on the browser