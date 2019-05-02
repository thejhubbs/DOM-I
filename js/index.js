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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

function setURLSrc(id, link) {
  let img = document.getElementById(id);
  img.setAttribute('src', siteContent[link]['img-src']);
}

setURLSrc('logo-img', 'nav');
setURLSrc('cta-img', 'cta');
setURLSrc('middle-img', 'main-content');

var navigationLinks = document.getElementsByTagName("nav")[0].getElementsByTagName('a');
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].innerHTML = siteContent['nav'][`nav-item-${i + 1}`];
}

document.getElementsByClassName('cta')[0].getElementsByTagName('h1')[0].innerHTML = siteContent['cta']['h1'];
document.getElementsByClassName('cta')[0].getElementsByTagName('button')[0].innerHTML = siteContent['cta']['button'];

var pageSections = ['features', 'about', 'services', 'product', 'vision'];
var textContents = document.getElementsByClassName('text-content');
for(let i=0; i < textContents.length; i++) {
  textContents[i].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content'][`${pageSections[i]}-h4`];
  textContents[i].getElementsByTagName('p')[0].innerHTML = siteContent['main-content'][`${pageSections[i]}-content`];
}

var contactSection = document.getElementsByClassName('contact')[0];
contactSection.getElementsByTagName('h4')[0].innerHTML = siteContent['contact']['contact-h4'];
contactSection.getElementsByTagName('p')[0].innerHTML = siteContent['contact']['address'];
contactSection.getElementsByTagName('p')[1].innerHTML = siteContent['contact']['phone'];
contactSection.getElementsByTagName('p')[2].innerHTML = siteContent['contact']['email'];


document.getElementsByTagName('footer')[0].getElementsByTagName('p')[0].innerHTML = siteContent['footer']['copyright'];

var newLink = document.createElement('a');
newLink.innerHTML = "First";

var lastLink = document.createElement('a');
lastLink.innerHTML = "Last";
document.getElementsByTagName("nav")[0].appendChild( newLink ) ;
document.getElementsByTagName("nav")[0].prepend( lastLink ) ;

var links = document.getElementsByTagName('a');
for(let i=0; i < links.length; i++){
  links[i].setAttribute('style', 'color:green');
}





