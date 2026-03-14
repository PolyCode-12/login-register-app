class ApiService{
    constructor(){
        this.url = "http://localhost:3000/users"
    }

    async registerUser(userData){
        const response = await fetch(this.url,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        return await response.json() 
    }
    async getAllUsers() {
        const response = await fetch(this.url);
        return await response.json();
    }
}
export const api = new ApiService();

