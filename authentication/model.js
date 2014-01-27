var moonshine = require("moonshine-js"),
	Schema = moonshine.db.Schema

var User = moonshine.db.getSchema("User")
User.add({
	name:String
})
var Note = moonshine.db.getSchema("Note")
Note.add({
    text:String,
	user:{type:String,ref:'user'}
});