const morgan = require('morgan');
const express = require('express');
const mongoose =require('mongoose');
const app = express();
const usersRoutes = require('./routes/users');

// DB Connection
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://admin:n1E0pBVlxaa2gHUc@cluster0.ixpxk.mongodb.net/movieDB?retryWrites=true&w=majority',{
    //dbName:"movieDB",
    //user:"admin",
    //pass:"n1E0pBVlxaa2gHUc",
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Mongodb connected . . .');
}).catch(err=> console.log(`tracking error:${err}`))

//settings
app.set('port', process.env.PORT || 3000);
//routes
app.use('/api/users',usersRoutes);   

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//start the server
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
})