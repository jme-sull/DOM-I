const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//cta
let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"])
const h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent["cta"]["h1"]
const headerButton = document.querySelector('.cta-text button');
headerButton.textContent = siteContent["cta"]["button"]

//nav
const nav = document.querySelectorAll('nav a');
navArray = Array.from(nav);

const navTexts = Object.values(siteContent.nav);
navTexts.pop();

navArray.forEach((link, index) => {
  link.textContent = navTexts[index]
})

//middle image
const middleImage = document.querySelector('#middle-img')
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

//main content headers

const mainContentHeaders = document.querySelectorAll('.text-content h4');


mainContentHeaders[0].textContent = siteContent['main-content']['features-h4']
mainContentHeaders[1].textContent = siteContent['main-content']['about-h4']
mainContentHeaders[2].textContent = siteContent['main-content']['services-h4']
mainContentHeaders[3].textContent = siteContent['main-content']['product-h4']
mainContentHeaders[4].textContent = siteContent['main-content']['vision-h4']

//main content p 

const mainContentParagraphs = document.querySelectorAll('.text-content p');


mainContentParagraphs[0].textContent = siteContent['main-content']['features-content']
mainContentParagraphs[1].textContent = siteContent['main-content']['about-content']
mainContentParagraphs[2].textContent = siteContent['main-content']['services-content']
mainContentParagraphs[3].textContent = siteContent['main-content']['product-content']
mainContentParagraphs[4].textContent = siteContent['main-content']['vision-content']

//contact header
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4']

//contact p

const contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = siteContent['contact']['address']
contactInfo[1].textContent = siteContent['contact']['phone']
contactInfo[2].textContent = siteContent['contact']['email']

//footer

const footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']




