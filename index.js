import './index.css';

const cookieConsentButton = document.querySelector('.cookie-consent__button');

cookieConsentButton.addEventListener('click', () => {
    localStorage.setItem('value', true);

    const cookieConsent = document.querySelector('.cookie-consent');
    cookieConsent.className = 'cookie-consent hide';
});

const value = localStorage.getItem('value');
localStorage.removeItem('value');

if(value){
    localStorage.removeItem('value');
    
    const cookieConsent = document.querySelector('.cookie-consent');
    cookieConsent.className = 'cookie-consent hide';
}else {
    localStorage.removeItem('value');
}

