class Github{
    constructor(){
        this.url = "https://api.github.com/users/";
    }
    async GetGithubData(username){

        const ResponseUser = await fetch(this.url + username);
        const ResponseRepo = await fetch(this.url + username + "/repos");

        const GetUser = await ResponseUser.json();
        const GetRepo = await ResponseRepo.json();

        return{
            user : GetUser ,
            Repo : GetRepo 
        }

    }
}