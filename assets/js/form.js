const firebaseConfig = {
    apiKey: "AIzaSyCxzPiNvIhp4XFRR-oi1Ol_uiX8DpGarAw",
    authDomain: "contactform-73102.firebaseapp.com",
    databaseURL: "https://contactform-73102-default-rtdb.firebaseio.com",
    projectId: "contactform-73102",
    storageBucket: "contactform-73102.appspot.com",
    messagingSenderId: "394078038294",
    appId: "1:394078038294:web:bad25658a215b844258837",
    measurementId: "G-3WERTHWD8P"
  };

//initialize firebase
firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
 var msgContent = getElementVal('msgContent');   
  
 saveMessages(name,emailid,msgContent);

 //enable alert 
 document.querySelector('.alert').style.display = "block";

//remove alert
setTimeout(() => {
    document.querySelector('.alert').style.display ="none"; 
},3000);


//reset form
document.getElementById('contactForm').reset();
};

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();


    newContactForm.set({
        name:name,
        emailid:emailid,
        msgContent : msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value; 
 };