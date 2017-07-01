export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public age: string;
  public state?: string;

  constructor(
    id?: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    age?: string,
    state?: string
    ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.state = state;
  }
}
