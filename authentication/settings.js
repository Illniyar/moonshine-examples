module.exports.config = function(settings){
    settings.DB_CONNECTION= "mongodb://localhost/moonshineauth"
}
module.exports.requiredComponents = [
    "moon-contrib-user",
    "moon-contrib-user-local",
    "moon-contrib-user-rememberme"
]