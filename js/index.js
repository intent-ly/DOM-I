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

//Navigation 
const navigator = document.querySelectorAll("a");
navigator[0].textContent = 'Services';
navigator[1].textContent = 'Product';
navigator[2].textContent = 'Vision';
navigator[3].textContent = 'Features';
navigator[4].textContent = 'About';
navigator[5].textContent = 'Contact';

//Header
let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', 'img/header-img.png');

let heading = document.querySelector('h1');
heading.textContent = siteContent["cta"]["h1"];

document.querySelector('button').textContent = siteContent['cta']['button'];

//Paragraph Content
const pArray = document.querySelectorAll('p');
pArray[0].textContent =siteContent['main-content']['features-content'];
pArray[1].textContent =siteContent['main-content']['about-content'];
pArray[2].textContent =siteContent['main-content']['services-content'];
pArray[3].textContent =siteContent['main-content']['product-content'];
pArray[4].textContent =siteContent['main-content']['vision-content'];
pArray[5].textContent =siteContent['contact']['address'];
pArray[6].textContent =siteContent['contact']['phone'];
pArray[7].textContent =siteContent['contact']['email'];
pArray[8].textContent =siteContent['footer']['copyright'];

//H4 Content
const titles = document.querySelectorAll('h4');
titles[0].textContent =siteContent['main-content']['features-h4'];
titles[1].textContent =siteContent['main-content']['about-h4'];
titles[2].textContent =siteContent['main-content']['services-h4'];
titles[3].textContent =siteContent['main-content']['product-h4'];
titles[4].textContent =siteContent['main-content']['vision-h4'];

//Image
let mid = document.getElementById('middle-img');
mid.setAttribute('src', 'img/mid-page-accent.jpg');

//Add Navigation and Change color
const parent = document.querySelector('nav');
const linkOne = document.createElement('a');
const linkTwo = document.createElement('a');

linkOne.textContent = 'Home';
linkTwo.textContent = 'Meet the Team';

parent.appendChild(linkOne);
parent.prepend(linkTwo);

const item = document.querySelectorAll('a');
item.forEach(element =>{
  element.style.color = 'limegreen';
});