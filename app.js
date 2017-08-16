var tmi = require('tmi.js');
var colors = require("colors/safe");

var config = JSON.parse(require('fs').readFileSync('./config.json', 'utf8'));

var options = config;
var client = new tmi.client(options);

var channelMention = new RegExp('((?=' + options.mentions + ').)', 'i');

var salutations = GetSalutations();

client.connect();

client.on("connected", function(address, port) {
	console.log(colors.green.bold("Hi-Q has connected to your Twitch channel and is now monitoring salutations!"));
});

client.on("chat", function(channel, user, message, self) {
	var saluted = salutations.test(message);
	var mentioned = channelMention.test(message);

	if (saluted && mentioned) {
		console.log(colors.bgRed(user.username + " saluted!"));
	}
});

function GetSalutations()
{
	var regexString = "(";
	options.salutations.forEach(function(s, index) {
		regexString = regexString + "(?=" + s + ")";

		if (index !== (options.salutations.length - 1)) {
			regexString = regexString + "|";
		}
	});

	regexString = regexString + ".)";
	console.log(colors.blue(regexString));
	return new RegExp(regexString, "i");
}