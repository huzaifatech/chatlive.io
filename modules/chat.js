const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/chat',{useNewUrlParser: true,useCreateIndex: true,});
var conn=mongoose.Collection;
var chatSchema =new mongoose.Schema({
    user:{
        type:String
    },
    chat:{ 
        type: String,
    },
    date:{
        type: Date,
        default: Date.now 
        }

});

var chatModel = mongoose.model('chat_history',chatSchema);
module.exports=chatModel;