
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const http = require('http');
const router = express.Router();



require('dotenv').config();

const app = express();

const server = http.createServer(app);

const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open',() => {
    console.log('Connection Enstablished')
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

router.get('/',(req,res)=> {
    res.send('server is up and running')
} )


//if(process.env.NODE_ENV === "production") {
//    app.use(express.static('Client/build'));

  //  app.get('*', (req,res)=>{
   //     res.sendFile('index.html', { root:'Client/public' });
       
   // } )
//}

app.use(router)

server.listen(PORT,() => {
    console.log('Server up and running on')
})