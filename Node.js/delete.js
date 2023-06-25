const dbConnect = require('./mongodb')

const deleteData = async ()=>{
    const data = await dbConnect();
    let result = await data.deleteMany(
        {name : 'Universe'}
    );
    console.warn(result);
}
deleteData();