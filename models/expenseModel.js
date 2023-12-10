const mongoose= require("mongoose")


const expenseModel= mongoose.Schema({
   item: String,
   date: String,
   expense: String,
   category: String,
   tag: String,
   paymentmode:{
        type:String,
      //   enum:['cash','online','check']
   },

   user:{type: mongoose.Schema.Types.ObjectId, ref: "collection4" }
}, {timestamps: true}
)



module.exports=mongoose.model("post",expenseModel)