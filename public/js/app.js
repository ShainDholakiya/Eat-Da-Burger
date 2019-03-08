// Create Burger Template 
const burgerTemplate = (burgerName, id, devoured) => {
    const burgerContainer = $('div').attr({
        class: 'content-burger_list',
        id: id
    });

    const img = $('<img>').attr({
        src: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1680&q=80",
        alt: 'burger'
    });

    const name = $('<p>');

    const button = $('<button>').attr({
        'data-id': id,
        class: 'btn btn-outline-dark devour',
        'data-state': devoured
    });

    name.html(burgerName);
    button.html('Devour it!');

    burgerContainer.append(img, name, button);

    return burgerContainer;

};

// Handle Success Case 
const displayNewBurger = (burger) => {
    const name = burger.burger_name;
    const id = burger.id;
    const devoured = burger.devoured;

    const newBurger = burgerTemplate(name, id, devoured);

    $('.content-burger').prepend(newBurger);
    $('input').val('');
};

// Handle Failures
const addBurgerFail = (response) => {
    alert("Burger Failed");
};


$('button[type="submit"]').on('click', function() {
    event.preventDefault();

    const burgerName = $('input[name="burger_name"]').val();

    $.ajax({
        url: '/add',
        method: 'POST',
        data: {
            burger_name: burgerName
        }
    })
    .then(displayNewBurger)
    .catch(addBurgerFail);

});;