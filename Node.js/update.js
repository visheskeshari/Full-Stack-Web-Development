const dbConnect = require('./mongodb')

const updateData = async ()=>{
    const data = await dbConnect();
    let result = await data.updateMany(
        {name : 'Galaxy'}, {$set : {name:'Universe', brand: 'UltraSam'}}
    );
    console.warn(result);
}
updateData();