// src/services/authService.ts

export class AuthService{

    login(user:string){

        return user.startsWith("admin");

    }

}