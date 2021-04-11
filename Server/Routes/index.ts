// Express Configuration
import express from 'express';
const router = express.Router();
export default router;

// Contact Model
import ContactModel from "../Models/contact";
const Contact = ContactModel; // Contact Alias

// Create an Index Controller instance
import {DisplayHomePage, DisplayAboutPage, DisplayContactPage, DisplayLoginPage, DisplayProjectsPage, DisplayServicesPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage} from "../Controllers/index";

/* GET home page - with / */
router.get('/', DisplayHomePage); 


/* GET home page - with /home */
router.get('/home', DisplayHomePage);

/* GET about page - with /about */
router.get('/about', DisplayAboutPage);

/* GET services page - with /services */
router.get('/services', DisplayServicesPage);

/* GET projects page - with /projects */
router.get('/projects', DisplayProjectsPage);

/* GET contact page - with /contact */
router.get('/contact', DisplayContactPage);

/* GET login page - with /login */
router.get('/login', DisplayLoginPage);

/* GET register page - with /register */
router.get('/register', DisplayRegisterPage);


/* Process login page - with /login */
router.post('/login', ProcessLoginPage);

/* Process logout page - with /logout */
router.get('/logout', ProcessLogoutPage);

/* Process register page - with /login */
router.post('/register', ProcessRegisterPage);

