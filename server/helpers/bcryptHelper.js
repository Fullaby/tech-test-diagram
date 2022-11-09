const {hashSync,compareSync}= require('bcryptjs');

let hashPass= (password)=>hashSync(password,10)
let comparePass= (password,passInDb)=>compareSync(password,passInDb)

module.exports= {hashPass,comparePass}