let arrayOfUsers;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getUsers()

}

const getUsers = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(x => arrayOfUsers = x['results'])
     // .then(users => arrayOfUsers,push(users))

}


// this function logs the results in your browsers console
const consoleUsers = () => {
  console.log(arrayOfUsers)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayUsers = () => {
  const allUsers = document.getElementById('all-users')
  arrayOfUsers.map((x, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${results['name']['first']}:  ${results.gender}, by user: ${resulsts.location}`)
    li.appendChild(text)
    allUsers.append(li)
  })
}