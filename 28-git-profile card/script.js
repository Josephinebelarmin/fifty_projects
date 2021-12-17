const APIURL = "https://api.github.com/users/"

// type the above url with profile name to get DOM of API
// eg:https://api.github.com/users/josephinebelarmin
// getUser('josephinebelarmin')  // hard coding 

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// step 1: to get all the 

// function getUser(username){
//     axios(APIURL + username)
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }

//Step 2 :to retrive only the data 
// function getUser(username){
//     axios(APIURL + username)
//         .then(res => console.log(res.data))
//         .catch(err => console.log(err))
// }

//step 3 use async and res instead using .then

// async function getUser(username){
//    const res = await  axios(APIURL + username)
//    console.log(res.data)
// }

//step 5 destructuring data from object res
async function getUser(username){
    try{
    const { data } = await  axios(APIURL + username)
    // console.log(data)
    createUserCard(data)
    }
    // catch(err){
    //     console.log(err)
    // }

    catch(err){
        if(err.response.status == 404){
        createErrorCard('No Profile with this user name')
        }
    }
 }

 function createUserCard(user){
    const cardHTML = `
    
    <div class="card">
                <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos">
                    <a href="#" class="repos">Repo1</a>
                    <a href="#" class="repos">Repo2</a>
                    <a href="#" class="repos">Repo3</a>
                </div>
            </div>
        </div>

    `
main.innerHTML = cardHTML 
}


function createErrorCard(msg){
    const cardHTML = `
    <div class="card">
    <h1> ${msg}</h1>
    </div>

    `

    main.innerHTML = cardHTML
}
 form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const user = search.value
    if(user){
        getUser(user)

        search.value= ''
    }
 })