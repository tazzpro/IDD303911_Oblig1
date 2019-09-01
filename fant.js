class Controller {
    constructor() {
        let rasmus = new User(
            1, 'rasmus', 'dronnen', 'Skolestien 25',
            'Oslo', '0100', 'rasmussd@stud.ntnu.no', '123456'
        );
        //List of users
        this.userList = null;

        //The selected item
        this.selectedItem = null;

        //The active user
        this.activeUser = null;

        this.login_view = document.getElementById('loginpage').children;
        this.login_view.style.display = 'block';
        document.getElementById('new').onclick = event => this.togglePageView();
        document.getElementById('login').onclick = togglePageView();
    }
    togglePageView() {
        this.login_view.style.display = 'none';
        let aa = document.createElement('input');
        aa.type = checkbox;
    }

}


class User {
    constructor(uid, firstName, lastName,
        addr, city, postCode, email, password) {
        this.uid = uid;
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