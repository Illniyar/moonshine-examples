var moonshine = require("moonshine-js"),
	Schema = moonshine.db.Schema

moonshine.db.schemas.list = new Schema({
    name:String,
	items:[String]
});