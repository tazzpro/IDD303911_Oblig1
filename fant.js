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

        
        
    }
    
    togglePageView() {
        this.login_view.style.display = 'none';
        let aa = document.createElement('input');
        aa.type = checkbox;
    }
    

}
function swapToCreate() {
    this.main_view = document.getElementById('loginpage');
    this.main_view.style.visibility = 'hidden';
    this.main_view.style.position = 'bottom: 0px';
    
    this.create_view = document.getElementById('signup');
    this.create_view.style.visibility = 'visible';
}

function addUser(form) {
var newuser = new User(
    firstName = form.firstName,
    lastName = form.lastName,
    addr = form.addr,
    city = form.city,
    postCode = form.postCode,
    email = form.email,
    password = form.password);

    users.push(newuser);
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
    constructor(title, price, description, image) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}