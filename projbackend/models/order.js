const monggose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const OrderSchema = new mongoose.Schema({

    products: [ProductCartSchema],
    transaction_id: {},
    amount: {type: Number},
    address: String,
    update: Date,
    user:{
        type: ObjectId,
        ref: "User"
    }
}, {timestamps: true}
);