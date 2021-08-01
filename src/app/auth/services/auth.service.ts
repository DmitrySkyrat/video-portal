import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ILoginRequest, IToken } from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  login(credentials: ILoginRequest): Observable<IToken> {
    return this.http.post<IToken>('http://localhost:3004/auth/login', {
      login: credentials.login,
      password: credentials.password
    });
  }
}
