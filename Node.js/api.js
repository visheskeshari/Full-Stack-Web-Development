// const express = require ('express');
// const dbConnect = require ('./mongodb');
//  const app = express();

// app.use(express.json());

// app.get('/', async(req, resp)=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
//     resp.send(data)
// });

// app.post('/', async(req, resp)=>{
//     console.log(req.body);
//     resp.send(req.body);
// });

// app.listen(5000)      //  POST

// ----------------------------------------------------------------------------------------------

// const express = require ('express');
// const dbConnect = require ('./mongodb');
//  const app = express();

// app.use(express.json());

// app.get('/', async(req, resp)=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
//     resp.send(data)
// });

// // app.post('/', async(req, resp)=>{
// //     console.log(req.body);
// //     let data = await dbConnect();
// //     let result = await data.insertOne(req.body);
// //     resp.send(result);
// // });

// app.put('/', async(req,resp)=>{
//     let data = await dbConnect();
//     let result = data.updateOne(
//         //{name:'Fold'},
//         // { $set:{Price:1000}}   // Static Updation

//         {name:req.body.name},
//         {$set: req.body}   //  Dynamic Updation (via Postman)
//     )
//     resp.send({result:"Updated"})
// })

// // what if the name itself is changing ... then we can not acess anything using name right
// app.put('/:name', async(req,resp)=>{
//     let data = await dbConnect();
//     let result = data.updateOne(
//         {name:req.params.name},
//         {$set: req.body}   //  Dynamic Updation using parameter (via Postman)
//     )
//     // and acess the old parameter (name here) by server site like http://localhost:5000/Fold
//     resp.send({result:"Updated"}) 
// })

// app.listen(5000)    //   PUT

//----------------------------------------------------------------------------------------------

const express = require ('express');
const mongoDb = require('mongodb');
const dbConnect = require ('./mongodb');
 const app = express();

app.use(express.json());

app.get('/', async(req, resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data)
});

app.delete('/:id', async(req,resp)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)})
    resp.send(result);
})


app.listen(5000)    //   DELETE