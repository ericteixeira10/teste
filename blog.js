const mongoose=require("mongoose")

//criando primeiro um SCHEMA: define propriedades das colunas do meu database
const schema=new mongoose.Schema(
    title: String,
    subTitle: String,
    description: String
})

//convertendo schema into MODEL (o model me permite fazer mudanças no database ("database handler")):
const blog=mongoose.model("blog",schema) //"blog" é o nome que decidi dar pro model

//exportando esse modelo para poder puxar em outro arquivo do meu backend
module.exports=blog
