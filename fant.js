class Controller {
    constructor() {
        let rasmus = new User(
             'ras', 'dronnen', 'Heimstad',
            'Oslo', '0100', 'rasmussd@stud.ntnu.no', '123');
        
        this.users = new Set([rasmus]);

        this.items = [
            new Item ('rasmus', 'sofa', '2000', 
            'pen og ubrukt sofa selges billig',
             'No image added'),
             new Item ('Sofie', 'TV', '6000', 
            'LG OLED UHD 55" søker nytt hjem',
             'No image added'),
             new Item ('Sofie', 'tv-benk', '200', 
            'perfekt til en stor fin tv',
             'No image added'),
        ];

        //The selected item
        this.selectedItem = null;

        //User to be made
        this.selectedUser = null;

        //The active user
        this.activeUser = null;
        
        //loginview
        this.login_view = document.getElementById('loginpage');
        this.login_view.style.display = 'block';
        document.getElementById('new').onclick = event => this.swapToCreate();

        //signupview
        this.enlist_view = document.getElementById('signup');
        this.enlist_view.style.display = 'none';
        document.getElementById('log').onclick = event => this.swapToLogin();
        //Itemview
        this.item_view = document.getElementById('cont');
        this.item_view.style.display = 'none';
        //Add button here
        

        document.getElementById('signupform').onclick = event => this.validateform();

        document.getElementById('login').onclick = event => this.tryLogin();

        if(this.activeUser === null)
        {
            document.getElementById('namelink').onclick = event => this.swapToLogin();
        }
        if(this.activeUser != null)
        {
            document.getElementById('namelink').innerHTML = this.activeUser.firstName;
        }
        

    }
    
    swapToCreate() {
        this.login_view.style.display   = 'none';
        this.enlist_view.style.display  = 'block';
        this.item_view.style.display    = 'none';
    }

    swapToLogin() {
        this.login_view.style.display   = 'block';
        this.enlist_view.style.display  = 'none';
        this.item_view.style.display    = 'none';
        
    }
    swapToItems() {
        this.populateItems();
        this.login_view.style.display   = 'none';
        this.enlist_view.style.display  = 'none';
        this.item_view.style.display    = 'block';
    }
    changeLink() {
        var string = 'Velkommen ' + this.activeUser.firstName;
        document.getElementById('namelink').innerHTML = string;
    }

    tryLogin() {
        
        var name = document.getElementById('loginname').value;
        var pass = document.getElementById('loginpw').value;

        for(let user of this.users)
        {
            if(user.firstName == name)
            {
                
                if(user.password == pass)
                {
                    this.activeUser = user;
                    this.changeLink();
                    this.swapToItems();
                }
                
            }
        }

    }
    populateItems() {
        for(let item of this.items)
        {
            let itembox = document.getElementById('item');
            let itemheader = document.createElement('h2');
            itemheader.innerText = item.title;
            this.item.appendChild(itembox);

        }
    }

    validateform(){
        console.log('HEI');
        var first = document.getElementById('firstname').value;
        var last = document.getElementById('lastname').value;
        var add = document.getElementById('addr').value;
        var cit = document.getElementById('city').value;
        var post = document.getElementById('postcode').value;
        var mail = document.getElementById('email').value;
        var pw = document.getElementById('password').value;
        this.selectedUser = new User (
            first, last, add, cit, post, mail, pw
        );
        this.users.push(this.selectedUser);
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