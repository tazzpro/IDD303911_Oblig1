class Controller {
    constructor() {
        let rasmus = new User(
             'rasmus', 'dronnen', 'Heimstad',
            'Oslo', '0100', 'rasmussd@stud.ntnu.no', '123456');
        
        this.users = new Set([rasmus]);

        //List of users
        this.userList = new Array;

        //The selected item
        this.selectedItem = null;

        //The active user
        this.activeUser = null;

        this.login_view = document.getElementById('loginpage');
        this.login_view.style.display = 'block';
        document.getElementById('new').onclick = event => this.swapToCreate();

        this.enlist_view = document.getElementById('signup');
        this.enlist_view.style.display = 'none';
        document.getElementById('log').onclick = event => this.swapToLogin();
     
        document.getElementById('signupform').onclick = event => this.validateform();
        
    }
    
    swapToCreate() {
        this.login_view.style.display = 'none';
        
        this.enlist_view.style.display = 'block';
    }

    swapToLogin() {
        this.enlist_view.style.display = 'none';

        this.login_view.style.display = 'block';
    }
    addUser(form) {
        var newuser = new User(
            firstName = form.firstName,
            lastName = form.lastName,
            addr = form.addr,
            city = form.city,
            postCode = form.postCode,
            email = form.email,
            password = form.password);
        
            this.users.push(newuser);
    }
    validateform(){
        console.log('HEI');
        let inform = new Array;
        var firstName = document.getElementById('firstname');
        if(firstName != null)
        {
            inform.push(firstName);
            console.log('Got the first name' + firstName);
            
        }
    }

}

class User {
    constructor( firstName, lastName,
        addr, city, postCode, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.addr = addr;
        this.city = city;
        this.postCode = postCode;
        this.email = email;
        this.password = password;
    }
}

class Item {
    constructor(ownerId, title, price, description, image) {
        this.ownerId = ownerId;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

ctrl = null;
document.addEventListener('DOMContentLoaded', function(){
    this.ctrl = new Controller();
}, false);