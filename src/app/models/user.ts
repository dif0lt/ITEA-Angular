export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public age: string;

    constructor(
      firstName: string,
      lastName: string,
      email: string,
      age: string,
      ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.age = age;
    }
}