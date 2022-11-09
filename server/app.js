if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
const express= require('express');
const app= express()
const port = 3000 || process.env.PORT
const cors= require('cors');
const router= require('./routes/index');
const erroHandler= require('./middlewares/errorHandler');

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/",router)
app.use(erroHandler)

app.listen(port,()=>{
    console.log(`CONNECTED TO PORT ${port}`);
})