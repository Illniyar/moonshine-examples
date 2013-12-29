var moonshine = require("moonshine-js"),
	Schema = moonshine.db.Schema

moonshine.db.schemas.User.add({name:String})
moonshine.db.schemas.Note = new Schema({
    text:String,
	user:{type:String,ref:'user'}
});