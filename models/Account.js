import mongoose from 'mongoose';
const Schema = mongoose.Schema;
var account = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    icon: {
        type: String
    },
    defaultDeposit: {
        type: Number
    }
});
export default mongoose.model('Account', account);