class UI{
    constructor(){
        this.ProfieDiv = document.getElementById("profile");
        this.ReposDiv = document.getElementById("repos");
        this.clearInput = document.getElementById("githubname");
        this.CardBody = document.querySelector(".card-body");
        this.lastUsers = document.getElementById("last-users");
        
    }
    ShowUserInfo(user){
        this.ProfieDiv.innerHTML =`<div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${user.avatar_url}"></a>
             <hr>
             <div id="fullName"><strong>${user.name}</strong></div>
             <hr>
             <div id="bio">${user.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                     takipçi <span class="badge badge-light"> ${user.follower}</span>
                </button>
                <button class="btn btn-info">
                      takip edilen <span class="badge badge-light">${user.following} </span>
                  </button>
                <button class="btn btn-danger">
                    repos  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div>`
    }
    ShowError(message){
        const br = document.createElement("br");
        const div = document.createElement("div");
        div.className = "alert alert-danger";
        div.textContent = message;
        
        this.CardBody.appendChild(br);
        this.CardBody.appendChild(div);
        setTimeout(function(){
            div.remove();
        }
            ,2000)

    }
    ShowRepoInfo(repos){
        this.ReposDiv.innerHTML ="";

        repos.forEach(repo=>{
            this.ReposDiv.innerHTML +=`
            <div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                
                <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                    </button>

                    <button class="btn btn-info">
                        Forklar  <span class="badge badge-light" id ="repoFork"><${repo.forkgazers_count}</span>
                    </button>
            
                </div>
        </div>

        </div>
            `
        });
    }
    AddSearchedUserToUI(username){
        let users = Storage.GetSearchedUsersFromStorage();

        if(users.indexOf(username) === -1){
            // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
            const li = document.createElement("li");

            li.className = "list-group-item";
            li.textContent = username;

            this.lastUsers.appendChild(li);
        }
    }

    ClearAllSearchedFromUI(){
        while(this.lastUsers.firstElementChild !== null){
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);
        }
    }
}