//template: template_0ha5z71
//service: service_cqunt7c
//publicKey: NQkhDt6mClnYfrttP

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme";
    }
    else{
        document.body.classList.remove("dark-theme");
    }
    console.log('it worked 1')
}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    
    emailjs.sendForm(
        'service_cqunt7c',
        'template_0ha5z71',
        event.target,
        'NQkhDt6mClnYfrttP'
    ).then(() =>{
        //throw new Error("error");
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        console.log("this worked")
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable  Please contact me directly on dankenrick34@yahoo.com"
        );
    })
   setTimeout(() =>{

    console.log('it worked 1')
   }, 500);
}

function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    // toggle modal
    document.body.classList += " modal--open";
}