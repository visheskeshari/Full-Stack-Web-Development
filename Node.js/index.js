// var app = require('./app');

// response.send(app);
// response.send(app.z());

// const arr = [2,3,4,55,6,6,7,788,223,34,5546346];

// let result = arr.filter((item)=>{
//     return item>34;
// })
// response.send(result);

// const fs = require('fs');
// fs.writeFileSync("hello2.txt", "Hello Vinod");

// const http = require('http');

// function dataControl (req, resp)
// {
//     resp.write("<h1>HELLO Vishes Keshari</h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);

// function multi (a)
// {
//     return a*100;
// } 
// // OR using arrow function

// const b = (a)=> a*100;

//----------------------------------------------------------------------------------------
// const colour = require ('colors');
// response.send ("Vishes Keshari".yellow);
// response.send ("Of Chakia  Chandauli".blue);
// response.send ("Is learning NODE JS".bgGreen);

//-----------------------------------------------------------------------------------------
// const chalk = require ('chalk');
// response.send (chalk.yellow('Vishes'));

//-----------------------------------------------------------------------------------------
// const http = require('http');
// const result = require('./myData')
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application/json'});
//     resp.write(JSON.stringify(result));
//     resp.end();
// }).listen(3000);

// -----------------------------------------------------------------------------------------
// const fs = require('fs');
// const input = process.argv;

// if (input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// } else if (input[2]=='remove'){
//     fs.unlinkSync(input[3])
// } else {
//     response.send('Invalid Input');
// }

//---------------------------------------------------------------------------------
// const fs = require('fs');
// fs.writeFileSync('apple.txt', 'This is an apple file')

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');

// // for (i=0; i<5; i++){
// //     fs.writeFileSync(dirPath+"/hello"+i+".txt", 'this is a file');
// // }

// fs.readdir(dirPath,(error,files)=>{
//     console.warn(files);
//     // or
//     files.forEach((item)=>{
//         response.send("file name is " + item);
//     })
// })

//--------------------------------------------------------------------------------------------

// const { error } = require('console');
// const { promises } = require('dns');
// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'CURD');
// const filePath = `${dirPath}/APPLE.txt`;

// fs.writeFileSync(filePath, 'welcome to the CURD file'); // CREATE FILE

// fs.readFile (filePath, 'utf8', (error,item)=>{
//     response.send (item);
// })                                               // READ file

// fs.appendFile(filePath, ' 14/04/23', (error)=>{
//     if(!error) {
//         response.send ("file is updated");
//     }
// })                                                 // UPDATE file

// fs.rename(filePath, `${dirPath}/MANGO.txt`, (err)=>{
//     if(!error) {
//         response.send ("file is renamed");
//         }
// })    //filePath is also unusable now              //  RENAME file

// fs.unlinkSync(`${dirPath}/MANGO.txt`);  // DELETE file 

//---------------------------------------------------------------------------------
// let a = 30;
// let b = 0;

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(70);
//     },2000)
// })

// waitingData.then((data)=>{
//     b=data;
//     response.send(a+b);
// })

//-------------------------------------------------------------------------------------

// const express = require ('express')
// const app = express();

// app.get('', (request, response)=>{
//     console.log ('data sent by browser =>>> ', request.query.name);
//     response.send('Welcome, ' + request.query.name);
// })

// app.get('/about', (request, response)=>{
//     response.send('ABOUT the page');
// })

// app.get('/help', (request, response)=>{
//     response.send('here to HELP');
// })

// app.listen(4000);

//--------------------------------------------------------------------------------------------

// const express = require ('express')
// const app = express();

// app.get('', (request, response)=>{
//     response.send(`
//     <h1>Welcome to the home page.</h1>
//     <a href = "/about"> Go to ABOUT page. </a>
//     <a href = "/help"> Go to HELP page. </a>
//     `);
// })

// app.get('/about', (request, response)=>{
//     response.send(`
//     <input type = "text" placeholder = "User name" value="${request.query.name}"/>
//     <button>click me</button>
//     <a href = "/"> Go to HOME page. </a>
//     `);
// })

// app.get('/help', (request, response)=>{
//     response.send(
//     [
//         {
//             name:"Vishes",
//             email: 'vishes@gmail.com'
//         },
//         {
//             name:"Gaurav",
//             email: 'gaurav@gmail.com'
//         },
//         {
//             name:"Ritik",
//             email: 'ritik@gmail.com'
//         }
//     ]);

// })

// app.listen(4000);

//-----------------------------------------------------------------------------------------------

// const express = require('express');
// const path = require('path');

// const app = express();
// const htmlloadPath = path.join(__dirname, 'htmlload');

// app.use(express.static(htmlloadPath));
// app.listen(4000);

//-----------------------------------------------------------------------------------------------

// const express = require('express');
// const path = require('path');

// const app = express();
// const htmlloadPath = path.join(__dirname, 'htmlload');

// app.get('/about',(_, resp)=>{
//     resp.sendFile(`${htmlloadPath}/about.html`)
// })
// app.get('/help',(_, resp)=>{
//     resp.sendFile(`${htmlloadPath}/help.html`)
// })
// app.get('*',(_, resp)=>{
//     resp.sendFile(`${htmlloadPath}/nopage.html`)
// })
// app.listen(4000);            // remove file extension

//------------------------------------------------------------------------------------------------------
// const express = require('express');
// const path = require('path');

// const app = express();
// const htmlloadPath = path.join(__dirname, 'htmlload');

// app.set('view engine', 'ejs');

// app.get('/about',(_, resp)=>{
//     resp.sendFile(`${htmlloadPath}/about.html`)
// })
// app.get('/help',(_, resp)=>{
//     resp.sendFile(`${htmlloadPath}/help.html`)
// })

// app.get('/profile',(_, resp)=>{
//     const user={
//         name: 'Vishes Keshari',
//         email: 'vishes@gmail.com',
//         skills: ['java', 'php', 'nodeJs', 'javascript', 'react']
//     }
//     resp.render('profile', {user});
// })

// app.get('/login', (_, resp)=>{
//     resp.render('login')
// })

// app.get('*',(_, resp)=>{
//     resp.sendFile(`${htmlloadPath}/nopage.html`)
// })


// app.listen(5000);            // use of ejs files and adding header in it

//---------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// const reqFilter=(req, resp, next)=>{
//     if (!req.query.age){
//         resp.send("Enter the age")
//     }
//     else if (req.query.age<18){
//         resp.send("You can not acsess the web page")
//     }
//     else{
//         next();
//     }
//     // console.log('reqFilter');

// }

// app.use(reqFilter);

// app.get('/',(req, resp)=>{
//     resp.send('Welcome to the home page')
// })

// app.get('/users',(req, resp)=>{
//     resp.send('Welcome to the Users page')
// })

// app.listen(4000);          // Application level Middleware

//----------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// const reqFilter=(req, resp, next)=>{
//     if (!req.query.age){
//         resp.send("Enter the age")
//     }
//     else if (req.query.age<18){
//         resp.send("You can not acsess the web page")
//     }
//     else{
//         next();
//     }
//     // console.log('reqFilter');

// }

// // app.use(reqFilter);     // remove application routing

// app.get('/',(req, resp)=>{
//     resp.send('Welcome to the home page')
// })

// app.get('/users',reqFilter,(req, resp)=>{
//     resp.send('Welcome to the Users page')
// })

// app.get('/about',(req, resp)=>{
//     resp.send('About the page')
// })

// app.listen(4000);       // routinng on particular pages

//---------------------------------------------------------------------------------------------------------

// const express = require('express');
// const reqFilter = require('./middleware');
// const app = express();

// // app.use(reqFilter);     // remove application routing

// app.get('/',(req, resp)=>{
//     resp.send('Welcome to the home page')
// })

// app.get('/users',reqFilter,(req, resp)=>{
//     resp.send('Welcome to the Users page')
// })

// app.get('/about',(req, resp)=>{
//     resp.send('About the page')
// })

// app.listen(4000);       // making seperate file of middleware and exporting it here

//-------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const reqFilter = require('./middleware');
// const app = express();

// const route = express.Router();
// route.use(reqFilter);

// app.use(reqFilter);     // remove application routing

// app.get('/',(req, resp)=>{
//     resp.send('Welcome to the home page');
// })

// route.get('/users',reqFilter,(req, resp)=>{
//     resp.send('Welcome to the Users page');
// })

// app.get('/about',(req, resp)=>{
//     resp.send('About the page');
// })

// route.get('/contact',(req, resp)=>{
//     resp.send('CONTACT');
// })

// app.use('/', route);

// app.listen(4000);       // if we have to use route on 30-40 pages

//-------------------------------------------------------------------------------

// const {MongoClient} = require('mongodb')
// //OR
// // const MongoClient = require('mongodb').MongoClient;

// const url= 'mongodb://127.0.0.1:27017/'; 
// const databaseName='e-comm'
// const client= new MongoClient(url);

// async function getData() {
//     try {
//         let result = await client.connect();
//         db = result.db(databaseName);
//         let collection = db.collection('product');
//         let data = await collection.find({}).toArray();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getData(); // fetching data from moongo compss or say database 

//--------------------------------------------------------------------------------------------------

// const {MongoClient} = require('mongodb')
// //OR
// // const MongoClient = require('mongodb').MongoClient;

// const url= 'mongodb://127.0.0.1:27017/'; 
// const databaseName='e-comm'
// const client= new MongoClient(url);

// async function dbConnect() {
//     try {
//         let result = await client.connect();
//         db = result.db(databaseName);
//         return db.collection('product');
//         // let data = await collection.find({}).toArray();
//         // console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// // dbConnect().then((resp)=>{
// //     resp.find().toArray().then((data)=>{
// //         console.warn(data);
// //     })
// // }); 

// //or

// const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.warn(data);
// }

// main();  

//---------------------------------------------------------------------------------------------------

// const dbConnect = require('./mongodb')
// // dbConnect().then((resp)=>{
// //     resp.find().toArray().then((data)=>{
// //         console.warn(data);
// //     })
// // }); 

// //or

// const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.warn(data);
// }

// main();  

//------------------------------------------------------------------------------------------------------------

// #####################################################################################################
// #############   working with    "  M  O  N  G  O  O  S  E   "   starts from here    #################
// #####################################################################################################

// const mongoose = require('mongoose');

// const main = async () => {
//     await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
//     const ProductSchema = new mongoose.Schema(
//         {
//             name: String,
//             Price: Number,
//             brand: String,
//             OS: String
//         },
//         { collection: 'product' }
//     );
//     const ProductModel = mongoose.model('product', ProductSchema); //'product'); see the below explanation
//     let data = new ProductModel({ name: "Zenbook", Price: 1500, brand:'ASUS', OS:'Windows' });
//     let result = await data.save();
//     console.log(result);
// }

// main();

// By default, Mongoose will produce a collection name by pluralizing the model name.
// In your code, the model name is 'product', so Mongoose will create a collection named 'products'.
// If you want to use a different collection name,
// you can either pass it as the second argument to the mongoose.model() function
// or set the collection option in your schema.
// For example:

// const ProductModel = mongoose.model('product', ProductSchema, 'myCollectionName');

// or

// const ProductSchema = new mongoose.Schema({
//     name: String
// }, { collection: 'myCollectionName' });

//------------------------------------------------------------------------------------------------------------

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
// const ProductSchema = new mongoose.Schema(
//     {
//         name: String,
//         Price: Number,
//         brand: String,
//         OS: String
//     },
//     { collection: 'product' }
// );

// const saveInDB = async () => {
//     const Product = mongoose.model('product', productSchema);
//     let data = new Product({
//         name: "Zenbook",
//         Price: 1500,
//         brand: 'ASUS',
//         OS: 'Windows'
//     });
//     const result = await data.save();
//     console.log(result);
// }

// const updateInDB = async () => {

//     const Product = mongoose.model('product', ProductSchema);
//     let data = await Product.updateOne(
//         { name: 'Roll' },
//         {
//             $set: { Price: 230, name: 'Rock' }
//         }
//     );
//     console.log(data);
// }

// const deleteInDB = async () => {
//     const Product = mongoose.model('product', ProductSchema);
//     let data = await Product.deleteOne({ name: 'Rock' });
//     console.log(data);
// }

// const findInDB = async () => {
//     const Product = mongoose.model('product', ProductSchema);
//     let data = await Product.find({ name: 'Zenfone' });
//     console.log(data);
// }
// findInDB();          // CURD operations in Mongoose

//------------------------------------------------------------------------------------------------------------

// const express = require('express');

// require('./configMongoDB');

// const Product = require('./product');

// const app = express();
// app.use(express.json());

// app.post('/create', async (req, resp) => {
//     let data = new Product(req.body);
//     let result = await data.save();
//     console.log(result);
//     resp.send(result);
// });

// app.get('/list', async (req, resp) => {
//     let data = await Product.find();
//     resp.send(data);
// })

// app.delete('/delete/:_id', async (req, resp) => {
//     console.log(req.params);
//     let data = await Product.deleteOne(req.params);
//     resp.send(data);
// })

// app.put('/update/:_id', async (req, resp) => {
//     console.log(req.params);
//     let data = await Product.updateOne(
//         req.params,
//         { $set: req.body }
//     )
// })
// app.listen(5000);   //  GET, PUT, DELETE API 

//----------------------------------------------------------------------------------------------------

// const express = require('express');
// require('./configMongoDB');
// const Product = require('./product');
// const app = express();
// app.use(express.json());

// app.get('/search/:key', async (req, resp) => {
//     console.log(req.params.key);
//     let data = await Product.find({
//             "$or": [
//                 { "name": { $regex: req.params.key } },
//                 { "brand": { $regex: req.params.key } },
//             ]
//     });
//     resp.send(data);
// })

// app.listen(5000);   //  Search data

//----------------------------------------------------------------------------------------------------

// const express = require('express');
// const multer = require('multer');
// const app = express();

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null,'uploads');
//         },
//         filename : function(req,file,cb){
//             cb(null, file.fieldname+".jpeg")
//         }
//     }),
// }).single("user_file");

// app.post('/upload',upload,(req,resp)=> {
//     resp.send('file uploaded')
// })

// app.listen(5000);          //  file upload by node js using multer package   

//-------------------------------------------------------------------------------------------------------

// const os = require('os');

// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.userInfo());       // OS information

//--------------------------------------------------------------------------------------------------------

// const express = require ('express');
// const EventEmitter = require('events');
// const app = express();
// const event = new EventEmitter();

// let count = 0;

// event.on('Event shoot', ()=>{
//     count++;
//     console.log("event called", count);
// })

// app.get('/', (req, resp)=>{
//     resp.send("api called");
//     event.emit('Event shoot');
// });

// app.get('/update', (req, resp)=>{
//     resp.send("update api called");
//     event.emit('Event shoot');
// });

// app.get('/search', (req, resp)=>{
//     resp.send("search api called");
//     event.emit('Event shoot');
// });

// app.listen(5000);           //  event and event emitter

//---------------------------------------------------------------------------------------------------------

// #####################################################################################################
// #############   working with    "   my   S  Q  L   "   starts from here    ##########################
// #####################################################################################################


// const mySql = require('mysql');

// const con = mySql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "test"
// });

// // con.connect((err)=>{
// //     if(err){
// //         console.log("error");
// //     }
// //     else{
// //         console.log("no error");
// //     }
// // });      // to check that database (mySql) is connected or not

// con.query("select * from new", (err,result)=>{
//     console.log("result",result);
// });           //     basics of mySql with NodeJS

//---------------------------------------------------------------------------------------------------------

const express = require('express');
const con = require('./configMySQL');
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
    con.query("select * from new", (err, result) => {
        if (err) {
            resp.send("error");
        }
        else {
            resp.send(result);
        }
    })
});

app.post("/", (req, resp) => {
    // const data = {name:'Adi', password:3456, user_type:'dog'};  //static data giving
    const data = req.body;  // dynamic data giving
    con.query('Insert INTO nodeJS SET ?', data, (err, result, fields) => {
        if (err) throw err;
        resp.send(result);
    })
});

app.put("/:id", (req, resp) => {
    // const data = ["Prashant", "1701", "piano", 2];  //static data giving
    const data = [req.body.name, req.body.password, req.body.user_type, req.params.id];  //dynamic data giving
    con.query("Update nodejs SET name=?, password=?, user_type=? where id=?", data, (err, result, fields) => {
        if (err) throw err;
        resp.send(result);
    })
});

app.delete("/:id", (req,resp)=>{
    con.query("DELETE FROM nodejs WHERE id=" + req.params.id, (error,result,fields)=>{
        if (error) throw error;
        resp.send(result);
    })
})

app.listen(5000);
