const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://ericteixeira_:e62362300@cluster0.cogftbb.mongodb.net/?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}).then(()=>{
    console.log("connection successful")
}).catch((error)=>{
    console.log(`an error occured:${error}`)
})
