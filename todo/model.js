var moonshine = require("moonshine-js"),
	Schema = moonshine.persistence.Schema

moonshine.persistence.models.list = new Schema({
    name:String,
	items:[String]
});