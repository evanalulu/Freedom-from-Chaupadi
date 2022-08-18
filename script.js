// Learn more button
function showBtn() {
  document.getElementById('learnMoreBtn').style.visibility = 'visible';
}
setTimeout('showBtn()', 10000);

// Header
function showHeader() {
    document.getElementById('header').style.visibility = 'visible';
}
setTimeout('showHeader()', 3000);

// Email
function sendemail() {
      
Email.send({
  Host : "smtp.gmail.com",
  Username : "ng4223389@gmail.com",
  Password : "password",
  To : 'ng4223389@gmail.com',
  From : document.getElementById("email").value, 
  Subject : "New COntact Form Enquiry",
  Body : "Name"+document.geElementById("name").value
  +
    "<br> Email:"+document.getElementById("email").value
  +"<br> Phone No:"+document.getElementById("phone").value
  +
    "<br> Message:"+document.getElementById("message").value
  }).then(
  message => alert("Message sent Sucessfully")
  );
};

// Donate modal
const donateOpen = document.getElementById('donateOpen');
const modal_container = document.getElementById('modal_container');
const donateClose = document.getElementById('donateClose');
const submit = document.getElementById('submit');
var message = document.getElementById('message');

donateOpen.addEventListener('click', () => {
  modal_container.classList.add('show');
});

donateClose.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

submit.addEventListener('click', () => {
  modal_container.classList.remove('show');
  var inputName = document.getElementById('name').value;
  message.innerHTML = inputName + ", another young girl's life will be saved, all thanks to you!";
});
