import mongoose from 'mongoose';

const User = mongoose.model('User', mongoose.Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
}));

export default User;