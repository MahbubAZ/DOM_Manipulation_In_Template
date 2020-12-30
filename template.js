function showContent() {
    const name = document.getElementById("input-name").value;
    const email = document.getElementById("input-email").value;
    const homepage = document.getElementById("input-homepage").value;

    const contacts = document.getElementById("contacts");
    const conTemp = document.querySelector('#contact-template');

    const cln = conTemp.content.cloneNode(true);
    const conTemp2 = cln.querySelector('.contact');
    const h2_cln = conTemp2.querySelector('h2');
    const email_cln = conTemp2.querySelector('.email');
    const homepage_cln = conTemp2.querySelector('.homepage');
    const homepage_cln2 = homepage_cln.querySelector('a');

    h2_cln.textContent = name;
    email_cln.textContent = email;
    homepage_cln2.textContent = homepage;
    homepage_cln2.href = homepage;

    contacts.appendChild(cln);

    document.getElementById("input-name").value = '';
    document.getElementById("input-email").value = '';
    document.getElementById("input-homepage").value = '';
}

