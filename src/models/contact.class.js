export class Contact  {
    firstName = '';
    lastName = '';
    email = '';
    isConnect = false; 

    constructor(firstName,lastName,email,isConnect)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isConnect = isConnect;
    }
}