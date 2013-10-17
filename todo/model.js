var moonshine = require("moonshine-js"),
	Schema = moonshine.persistence.Schema

moonshine.persistence.schemas.list = new Schema({
    name:String,
	items:[String]
});