const express = require('express');
const res = require('express/lib/response');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');


const User = require('../models/User')

class AuthController {
    // [GET] /auth/login
    login(req, res, next) {
        res.render('log/login');
    }

    // [GET] /auth/register
    register(req, res, next) {
        res.render('log/regist');
    }

    // [POST] /auth/regis
    async regis(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
        const typeUser = req.body.typeUser;

        if (!username || !password)
            return res.status(400).json({success: false, message: 'Missing username or password or both'})
            try {
                const user = await User.findOne({ username: username });
                if (user)
                    return res.status(400).json({success: false, message: 'username already taken'})
                
                
                const hashedPassword = await argon2.hash(password);
                const newUser = new User({
                    username: username,
                    password: hashedPassword,
                })
                await newUser.save();

                res.json({success:true, message: 'user created successfully'})
            } catch (next) {}
    }

    // [POST] /auth/logy
    async logy(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;

        //console.log(username);
        
        if (!username || !password)
        return res.status(400).json({success: false, message: 'Missing username or password or both'})
            try {
                const user = await User.findOne({ username: username });
                if (!user)
                return res.status(400).json({success: false, message: 'incorrect username'})

                const passwordValid = await argon2.verify(user.password, password);
                if (!passwordValid)
                return res.status(400).json({success: false, message: 'incorrect password'})

                res.json({success:true, message: 'user logged in successfully'})
            } catch (next) {}
    }
}

module.exports = new AuthController();