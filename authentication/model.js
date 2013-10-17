var moonshine = require("moonshine-js"),
	Schema = moonshine.persistence.Schema

moonshine.persistence.schemas.User.add({name:String})
moonshine.persistence.schemas.Note = new Schema({
    text:String,
	user:{type:String,ref:'user'}
});