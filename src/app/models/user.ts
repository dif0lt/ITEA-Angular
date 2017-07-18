export class User {
  public id?: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public role: string;
  public password: string;

  constructor(
    id?: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    role?: string,
    password?: string,
    ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
    this.password = password;
  }
}
