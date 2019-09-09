# Technology

## Front End

### Solution: React & React Router  
**What problems does this solution solve for this specific project?**





**What are the costs of using this solution?**



**What will you be using for styling and presentation?**  


## Back End

### Solution: Node & Express  
**What problems does this solution solve for this specific project?:**


**What are the costs of using this solution?**  


## Database

### Solution: Postgres with Knex  
**What problems does this solution solve for this specific project?**  

**What are the costs of using this solution?**  


## Deployment

### Solution: Netlify & Heroku  
**What problems does this solution solve for this specific project?**

**What are the costs of using this solution?**


# Description of Features  

**Name:** ​Landing Page  
**User type:** ​All  
**Description:** ​Marketing site for existing and prospective users, contains login and registration
buttons to access application
**Use Case:** ​A prospective user is seeking software to find locations for remote work so they come to our landing
page to learn more about our specific value proposition and potentially register for our product.
An existing user wishes to login.  

---

**Name:** ​Registration Page  
**User type:** ​All  
**Description:** Allows for creation of new users
**Use Case:** ​A new user needs to create an account to have access to location finder, reviews and our product features.

---

**Name:** ​Login Page  
**User type:** ​All  
**Description:** ​Performs login authentication, redirects based on result  
**Use Case:** ​A user wants to login using proper credentials; to have access to account specific features.  

---

**Name:** ​Google Map Location Finder
**User type:** ​All  
**Description:** ​Google Places/Map API locates the users geolocation automatically, user can then search for another location via the autocomplete search bar. Place results are then displayed to the user via 'cards' after a search request has been made.
**Use Case:** ​A user wants to search an area and receive nearby place results.

---

**Name:** ​Network Speed Display
**User type:** ​All  
**Description:**  
**Use Case:** 

# Implementation of Features


---
### ​Registration Page / Login Page
**What services, APIs, or platforms will you use to implement this feature?**  
- Firebase for Authentication    

**What are the costs and benefits of using this solution?**  
The benefits are relying on Firebase to provide security, and having a simplified JWT structure that allows us to easily access authenticated user profiles.  There are also multiple ways to easily integrate other registration methods using 3rd party accounts such as Github, Facebook, and Google. The Costs are potential migration issues if we needed to change our authentication provider.

---
### ​Google Maps Location Finder
**What services, APIs, or platforms will you use to implement this feature?**
- APIs
  - Google Map API
  - Google Places API

**What are the costs and benefits of using this solution?**  
- Cost
  - May limit us in our use case in unforseen ways 
- Benefits
  - Massive amount of data at our disposal
  - Extensive documentation 
---
### ​Network Speed Display
**What services, APIs, or platforms will you use to implement this feature?**  
- APIs
    - speedtest-net

**What are the costs and benefits of using this solution?** 
- Cost
    - slow return speed for network test results, offest via `child_process` in Node
- Benefits
    - Easily implemented for access to network information
    - Customizable return object of results
