function register() {
    acnum = acno.value

    if (acnum in localStorage) {
        alert(`user already exist`)
        window.location = `index.html`
    }
    else {
        usernam = usrnm.value
        password = psw.value

        acdetails = { acnum, usernam, password }

        localStorage.setItem(acnum, JSON.stringify(acdetails))
        alert(`user added successful`)

        window.location = `index.html`
    }
}

function login() {
    anum = logacno.value
    if (anum in localStorage) {
        paswd = logpsw.value
        userdata = JSON.parse(localStorage.getItem(anum))
        if (paswd == userdata.password) {

            window.location = `home.html`

        } else {
            alert(`incurrect password`)
        }

    } else {
        alert(`user not found ,retry or signup if new user`)
    }

}
function logout() {
    window.location = `index.html`
}




// function dispaly() {
//     names = qwer.value
//     if (names in localStorage) {
//         disply.innerHTML = ` <p>
//     Name:${JSON.parse(localStorage.getItem(names)).usernam}
//     </p> `}
// }