    const express = require('express');
    const socketio = require('socket.io');
    const http = require('http');
    const passport = require('passport');
    const GoogleStrategy = require('passport-google-oauth20').Strategy;
    const keys = require('./config/keys');

    const PORT = process.env.PORT || 5000;

    const router = require('./router');

    const app = express();

    const server = http.createServer(app);
    const io = socketio(server);



    passport.use(new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:'/auth/google/callback',
    },(accessToken,refreshToken,profile,done)=>{
       console.log(profile);
    })
    );

    app.get('/auth/google',passport.authenticate('google',{
        scope:['profile','email']
    })
    );

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req,res)=>{
            res.redirect('/home');
        }
       
        );





    io.on('connection',(socket)=>{
        console.log("we have a new connection");

        socket.on('disconnect',()=>{
            console.log("user has left");
        });

        socket.on('im',(msg)=>{
            //io.emit('send message',msg);
            console.log(msg.text);
            io.emit('im',msg.text);
        })

    });

    app.use(router);

    server.listen(PORT, ()=>console.log(`listening on port ${PORT}`)); 