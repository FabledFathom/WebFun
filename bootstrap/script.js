function farmHand() {
    document.querySelector('#cowboy-q').innerHTML = 'Wowie! You really saved my bacon here. Thank you kind stranger.';
    var farmer = document.querySelector('#cowboy-btn');
    farmer.remove();
}

function treasureRun() {
    document.querySelector('#pirate-q').innerHTML = 'Arhahrahr! Great work matey! Yah have sdone well. Get going now, live to see another day.';
    var pirate = document.querySelector('#pirate-btn');
    pirate.remove();
}

function callWild() {
    document.querySelector('#knight-q').innerHTML = 'Ah you found her! Great work friend. Let us feast at my castle in celebration! It is a wounderous day.';
    var knight = document.querySelector('#knight-btn');
    knight.remove();
}

function signUp() {
    // document.querySelector('#signup-btn').innerHTML = '';
    var signUp = document.querySelector('#signup-btn');
    signUp.remove();
}

function logIn() {
    // document.querySelector('#signup-btn').innerHTML = '';
    var logIn = document.querySelector('#login-btn');
    logIn.remove();
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})