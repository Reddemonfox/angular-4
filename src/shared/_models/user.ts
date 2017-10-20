﻿export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(user: any) {
    this.id = user.id;
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

  public getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  public getFirstName() {
    return this.firstName;
  }

  public getLastName() {
    return this.lastName;
  }

  public getUsername() {
    return this.username;
  }

  public getId() {
    return this.id;
  }

  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  public setLastName(lastName: string) {
    this.lastName = lastName;
  }

  public setUsername(username: string) {
    this.username = username;
  }

  public setId(id: number) {
    this.id = id;
  }
}
