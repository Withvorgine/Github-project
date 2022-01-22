class Storage{
    static GetSearchedUsersFromStorage(){
        let users;

        if(localStorage.getItem("searched")=== null){
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }

    static AddSearchedUserToStorage(username){
        let users = this.GetSearchedUsersFromStorage();
        //Indexof
        if(users.indexOf(username)=== -1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));

    }

    static ClearAllSearchedFromStorage(){
        localStorage.removeItem("searched");
    }
}