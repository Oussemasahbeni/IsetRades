import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { staff } from './staff';
import { users } from './users';
import { project } from './project';
@Injectable({
  providedIn: 'root'
})
export class IsetService {
  baseUrl: String = 'http://localhost/ISETB/';
  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  getStaff() {
    return this.http.get<staff[]>(this.baseUrl + 'viewstaff.php');
  }

  getProjects() {
    return this.http.get<project[]>(this.baseUrl + 'viewprojects.php');
  }

  sendUsers(user: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let data = JSON.stringify(user);
    return this.http.post<users[]>(this.baseUrl + 'users.php', data);
  }
}
