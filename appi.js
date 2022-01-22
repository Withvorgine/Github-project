// elementleri seçme

const gitForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearButton = document.getElementById("clear-last-users");

const lastUser = document.getElementById("last-users");
const github = new Github();
const ui = new UI();
eventListeners();

function eventListeners(){
    gitForm.addEventListener("submit",getData);
    clearButton.addEventListener("click",clearallsearched);
    document.addEventListener("DOMContentLoaded",loadAllSearched);

}
function getData(e){
let username = nameInput.value.trim();
if (username ===""){
    alert("please enter a valuable username")
}
else{
    github.GetGithubData(username)
    .then(response => {if(response.user.message === "Not Found"){
        ui.ShowError("kullanıcı yoğtır");
    }
    else{
        ui.AddSearchedUserToUI(username);

        Storage.AddSearchedUserToStorage(username)
        ui.ShowUserInfo(response.user);
        ui.ShowRepoInfo(response.Repo)
    }})
    .catch(err => ui.ShowError(err));
    
    gitForm.reset();
}

    e.preventDefault();
}

function clearallsearched(){
    if(confirm("emin misiniz=")){
        Storage.ClearAllSearchedFromStorage();
        ui.ClearAllSearchedFromUI()
    }


}

function loadAllSearched(){

let users= Storage.GetSearchedUsersFromStorage();

let result="";
users.forEach(user =>{
    result += `<li class="list-group-item">${user}</li>`
})

lastUser.innerHTML = result;
}