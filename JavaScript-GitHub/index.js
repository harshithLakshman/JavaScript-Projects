const apiUrl="https://api.github.com/users/";
const main= document.querySelector("#main");
const getUser=async(userName)=>{
    const response= await fetch(apiUrl+userName);
    const data=await response.json();
    const card1=`
        <div class="card">
            <div>
                <img src="${data.avatar_url}" class="avatar" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="repos">
                    

                </div>

                
            </div>
        </div>
    `
    
    main.innerHTML=card1;
    getRepos(userName);
}


const getRepos=async(userName)=>{
    const repos = document.querySelector("#repos");

    const response= await fetch(apiUrl+userName+"/repos");
    const data=await response.json();
    
    data.forEach(
        (item) => {
        const elem=document.createElement('a');
        elem.target="_blank";
        elem.classList.add("repo");
        elem.href=item.html_url;
        elem.innerText=item.name;
        
        repos.appendChild(elem);

        
    })
}
const searchBox=document.querySelector("#form input");
searchBox.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        getUser(searchBox.value);
        searchBox.value="";
    }
}
)








