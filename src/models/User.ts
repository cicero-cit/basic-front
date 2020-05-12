class User {
  userName: string;

  email: string;

  password: string;

  constructor(userName = '', email = '', password = '') {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
}

export default User;
