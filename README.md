# Explore-Ireland-MS2
Milestone_Project-2_Code-Institute
## About
___

* The aim of this website is to promote Ireland as a travel destination.The Emerald Isle is fantastic for road trips, for hiking, discovering castles, eating seafood and sipping on whiskey. On top of the many buzzing cities, you could also explore the natural wonders and quaint villages that make up the countryside. It may conjure up images of green rolling hills, rugged seaside cliffs, and windswept rock formations. When you visit this Celtic country, you will be rewarded with all that and more!

___
### Table of contents

  * [About](#about)
  * [UX](#ux)   
  * [Strategy](#strategy)
  * [Scope](#scope)
  * [Structure](#structure)
  * [Skeleton](#skeleton)
  * [Surface](#surface)
  * [Technologies](#technologies-used)  
  * [Features](#features)    
  * [Testing](#testing)
  * [Deployment](#deployment)
  * [Credits](#credits)
  * [Acknowledgements](#acknowledgements)

## UX
___
### **This website will help to:**
___
* **People with no travel plans in mind (yet) or deciding where to go:**
    1. I want to get inspiration for my next travel experience.
    2. I want to be able to understand what kind of place I am being offered and explore it from the comfort of my own home.    
    3. I want to read more about the information that I'm interested in.   
    4. I want to know how interactive the website is.

![User Stories 1](assets/images/.jpg)

* **People making their  bookings**
    * I want to find out latest Covid-19 travel advice Ireland.
    * I can easily use and accessible simple navigation bar to select the section of the website.
    * I want to see random images of new locations I could visit.
    * I want to have access to all necessary travel information I need to plan my trip.
    * I can click the featured button to receive a newsletter for more updates.
![User Stories 2](assets/images/.jpg)

* **People who are travelling inside the Ireland**
    * I want to to use the map to find exiting places to visit and make quick decisions.
    * I want to use the website's Social Media for more inspiration.
    * I want to get in touch if I have any queries.


![User Stories 3](assets/images/.jpg)     

### Strategy
___
**Project goals:**
* To provide a finest experience to explore Ireland to all potential travellers.
* To promote and convey the beauty of the country.
* To enable easy access to the information needed to plan their trip.
* To showcase the best places to visit.
* To ensure users are able to get in touch through the Contact Form.

### Scope
___
To create a website that will help the users get motivated to plan their travel next to Ireland. 
The website has been divided into different section so that user can easily look into that and the infomation are easy and understanble way so that  they can plan their next trip.

### Structure
___
This website is a single page website that consists of four sections: Home, History and culture, Explore and Contact.
To navigate to different destinations on the website, users need to click navigation links that allow them to jump to different 
sections of the content or scroll down the page.

### Skeleton 
___
* [Desktop wireframes](assets/wireframes/.png)
* [Tablet and mobile wireframes](assets/wireframes/.png)

### Surface
___
Simple light background, less design, easily accessible navigation bar, amazing images of "Explore these places" were selected to allow users to explore the destination from their comfort zone, whether they are looking for a guide to a specific location or just browsing for the next trip inspiration.

## Technologies Used 
___
### Languages Used
___
* HTML5
* CSS3
* JavaScript

### Frameworks, Libraries and Programs Used
___

* Bootstrap - used to create a layout and to build a responsive, mobile-first design, 
which is compatible with all modern browsers. The components used: navigation, buttons, cards and image-carousel. 
* jQuery  plugins - required to ensure proper rendering of the Bootstrap components.  
* Git - used for version control and to keep track of the changes made to the repository.
* Gitpod - open source development platform, allowed to add, commit and push files to GitHub.
* GitHub - used as a hosting service for version control and future collaborations.
* Balsamiq - to create a mockup to allow  to plan the layout and content of the website.
* Font awesome - to add Font Awesome icons to required Headings and Footer section.
* Google Fonts - Roboto font has been used throughout the website.
* Google maps API - used to embed Google Maps into the website, to provide users with the locations information.
* EmailJS API - to create an email template and enable users to send emails directly without using the server.
* SweetAlert2 - an interactive custom modal window, provides a status confirmation (success / fail) when users submit a form on the website.

## Testing
___
### Code Validity
___
* HTML Markup Validation Service - [Pass](https://validator.w3.org/)
* CSS Validation Service - [Pass](https://jigsaw.w3.org/css-validator/)
## Further Testing
___
### Functionality Testing
___
* **Navigation Bar**
* The fixed navbar is placed on top of the page and always visible on all screen sizes.
* All the links on the navbar have been clicked to test and are working as intended, allowing users to jump to the linked page.
* Navbar Brand logo is linked to the Home page and is working as expected.
* The navbar collapses into a hamburger menu on screen sizes smaller than 768px. A navigation menu appears 
    when you click on the hamburger icon. This has been tested and working as intended.

* **Covid-19 Alert Tab**
    *"Latest travel advice" link, when clicked, takes users to the Ireland's page of the Irish Government's Foreign Travel Advice website. 

* **Image Carousel**
* Bootstrap Image carousel takes up the full page as intended and cycles through the images. The time delay attribute is functioning 
as intended, allowing 5 seconds delay between automatically cycling the images.
* Carousel-fade animation is working properly and allows a fade transition instead of a slide.
* Previous and Next controls have been clicked to test and are working as expected, taking users to the previous / next slide.

* **Cards Section**
* Cards section images have been tested by hovering over them as expected. 
* All three Show more / Show less buttons change color on hover and display more / less text when clicked.
* Cards section is responsive and works as designed, each taking the 100% width of the screen on smaller screen sizes.

* **Map Section**
* All Google Map markers have been for testing purposes and are functioning correctly. Upon clicking on the markers, the corresponding info window content appears in the gamebar section inside the card, located to the right of the map on medium and larger screens and below of the map on small screen sizes.
* All the location markers inside the map has been correctly located with correct latitude and longitude values of the places.

* **Contact Form**
* The Contact form has been tested by submitting the form with one or more empty required fields. This returns an error message requesting to fill in all the requested fields.
* When a text input entered into an email field it returns an error "@ sign should be included in the email address". This however doesn't stop users from entering incorrect email address.
* "Submit" button changes color on hover as intended.
* JavaScript `reset()` function is working correctly as the form resets after users fill in all input fields with valid data and click on "Submit" button.
* Tests revealed that the page was scrolling up to the top each time the form had been submitted. To prevent this from happening, `return false;` had been added to the event handler.
* When the form has been submitted, users see a customised SweetAlert2 message to confirm their action has been successful / failed. This has been tested and is working as expected.
* The Contact Form has been correctly linked to EmailJS and sends an email every time users submit the form.
     
* **Go to Top button**
*The Top button which is inserted just below the contact form right side of the screen.
*When the button is clicked it will take to the top of the screen, works as expected.

* **Footer**
* Footer is responsive and always stays on the bottom of the page. This have been tested by reducing / increasing the screen width and is working as intended.
* Change of colour and transition effects on hovering over Social Icons have been tested and working as intended.
* Click on each Social icon revealed that links are functioning as intended and open in new tabs.
    
### Usability Testing
___
Usability of this website has been tested by sharing it with family and friends. No issues arose during the tests and it was confirmed that 
the website was simple, engaging and user-friendly. They were able to intuitively use the interactive elements of the website, 
find the information they were looking for and easily understand the purpose of the website.

### Performance Testing
___
Performance testing was carried out using 

### Compatibility Testing
___
Compatibility and responsiveness of the website was extensively tested across multiple browsers (Chrome and Fire Fox) and on muliple screen size devices including iPhone (5, 6, 7, PLus, X), iPad, iPad Pro, Samsung Galaxy using Chrome Dev Tools and Responsive Web Design Tester.
It was also tested on physical devices like iPad. 

### Bugs
___


## Deployment
___
All code for this website was written in Gitpod and then pushed to GitHub to store in my local repository.
It was then published using GitHub Pages directly from the _master branch_ by following the steps below: 
* Select **Explore-Ireland-MS2** in the repositories
* Click on _Settings_ in the menu bar
* Scroll down to GitHub Pages and select _"main branch"_ in drop-down menu in the _Source_ section
* The page will reload and you'll be provided with a link to your published website.
* To run the code locally by cloning this repository, click on _Download_ Code. To clone the repository using HTTPS, under "Clone with HTTPS" click on _Save_.
* To create a personal copy of this repository, click on _Fork_ button on the top right corner of the page.

There is no difference between the deployed version and the development version.
















