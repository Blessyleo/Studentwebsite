const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const StudentSchema=new Schema({
    name: {
        type: String,
       
    },
    age: {
        type: Number,
       
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
let StudentDATA = mongoose.model('student', StudentSchema)

module.exports = StudentDATA