import User from "../models/user";

let currentUser : User;

function SetUser(user:User){
    currentUser = user;
}

function GetCurrentUser(){
    return currentUser;
}

