const buyButton = document.getElementById('buy-button');
const cartForm = document.getElementById('cart-form');

const ticket = document.getElementById('ticket');
const addTicket = document.getElementById('add-ticket');
const removeTicket = document.getElementById('remove-ticket');
const ticketPrice = document.getElementById('ticket-price');

addTicket.addEventListener('click', (e) =>{
    e.preventDefault();
    //console.log('adicionando um ticket');
    ticket.innerText = parseInt(ticket.innerText)+1;
    ticketPrice.innerText = parseInt(ticket.innerText)*90;
})

removeTicket.addEventListener('click', (e) =>{
    e.preventDefault();
    //console.log('removendo um ticket');
    if(parseInt(ticket.innerText)>1){
        ticket.innerText = parseInt(ticket.innerText)-1;
        ticketPrice.innerText = parseInt(ticket.innerText)*90;
    }
})


cartForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const nome = cartForm.nome.value;
    const email = cartForm.email.value;
    const quantityTickets = ticket.innerText;

    window.localStorage.setItem('nome', nome);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('quantityTickets', quantityTickets);
    window.location.href = "finalizacao.html"
/*  console.log('Nome: ', nome);
    console.log('Email: ', email);
    console.log('Tickets: ', ticket.innerText);*/
})