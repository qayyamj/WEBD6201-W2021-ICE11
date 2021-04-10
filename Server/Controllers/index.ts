import express, {Request, Response, NextFunction} from 'express';
const router = express.Router();

import mongoose from 'mongoose';
import passport from 'passport';

// create User Model Instance
import User from '../Models/user';

// Display Page Functions
export function DisplayHomePage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}

export function DisplayAboutPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'About', page: 'about', displayName: ''   });
}

export function DisplayServicesPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services', displayName: ''   });
}

export function DisplayProjectsPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: ''   });
}

export function DisplayContactPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: ''   });
}

export function DisplayLoginPage(req:Request, res:Response, next:NextFunction): void
{
    if(!req.user)
    {
        res.render('index', 
        {   
            title: 'Login', 
            page: 'login',
            messages:  req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName: ''   
        });
    }

    return res.redirect('/contact-list');
}

export function DisplayRegisterPage(req:Request, res:Response, next:NextFunction): void
{
    if(!req.user)
    {
        res.render('index', 
        { 
            title: 'Register', 
            page: 'register',
            messages:  req.flash('registerMessage'), 
            displayName: req.user ? req.user.displayName: ''   
        });
    }

    return res.redirect('/contact-list');
}

// Process Page Functions

export function ProcessLoginPage(req:Request, res:Response, next:NextFunction): void
{
    passport.authenticate('local', (err, user, info) => {
        // are there server errors
        if(err)
        {
            console.error(err);
            return next(err);
        }

        // are there login errors
        if(!user)
        {
            req.flash('loginMessage', 'Authenticatin Error');
            return res.redirect('/login');
        }

        req.login(user, (err) =>{
            // are ther DB errors
            if(err)
            {
                console.error(err);
                return next(err);
            }

            return res.redirect('/contact-list');
        });
    })(req, res, next);    
}

export function ProcessRegisterPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}

export function ProcessLogoutPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}

export function ProcessContactPage(req:Request, res:Response, next:NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: ''   });
}