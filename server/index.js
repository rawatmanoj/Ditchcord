    const express = require('express');
    const socketio = require('socket.io');
    const http = require('http');
    const passport = require('passport');
    const bodyParser = require('body-parser');
    const cookieSession = require('cookie-session');

    const authRoutes  = require('./routes/authRoutes');

    const PORT = process.env.PORT || 5000;

    const router = require('./router');

    const app = express();

    const server = http.createServer(app);
    const io = socketio(server);

    require('./services/passport');


    app.use(bodyParser.json());

    app.use(cookieSession({
        maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
        keys: ['randomstringhere']
    }));
    
    app.use(passport.initialize()); // Used to initialize passport
    app.use(passport.session()); 

    authRoutes(app);
    


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