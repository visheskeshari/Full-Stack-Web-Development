
const dbConnect = require ('./mongodb');

const insertMany = async ()=>{
    
    let database = await dbConnect();
    let result = await database.insertMany(
    [
        {name:"Galaxy" , brand:"Samsung", OS:"Android", Price: 700},
        {name:"Nothing 1" , brand:"Nothing", OS:"Android", Price: 350},
        {name:"Note 14 pro" , brand:"Xiaomi", OS:"Android", Price: 850}
    ]
    );
    if (result.acknowledged){
        console.log("data inserted")
    }
}

insertMany();