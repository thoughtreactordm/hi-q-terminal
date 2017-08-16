# Hi-Q (Terminal Version)

Hi-Q (Terminal Version) is a node terminal app that connects to your Twitch channel's IRC chat and listens for common salutations that mention the broadcaster.

## Installation

Hi-Q (Terminal Version) assumes you have a basic understanding of the command line. It also requires you have **node.js** installed on your system.

To start installation, clone this git repo to the folder of your choice and install dependencies:

````
cd path/to/install/folder
git clone git@github.com:thoughtreactordm/hi-q-terminal.git hiq
cd hiq
npm install
````

At this point the app is installed, but requires some configuration on your end before it can function properly.

## Configuration
Located in the installation folder is a `config.json` file:

````
{
	"options": {
		"debug": false
	},
	"connection": {
		"cluster": "aws",
		"reconnect": true
	},
	"identity": {
		"username": "<bot_username>",
		"password": "<oauth_code>"
	},
	"channels": ["<channel_name>"],
	"salutations": ["hey", "hi", "hello"],
	"mentions": "<broadcaster_username>"
}
````

Please set up the config as follows:

 - `<bot_username>`: This is the Twitch username of the bot; if you have not already created this you can do so at https://twitch.tv/signup
 - `<oauth_code>`: This is **NOT** your bot account password; to obtain your unique OAuth code, visit https://twitchapps.com/tmi and click 'Connect with Twitch'; this will prompt you to authorize the connection with your currently signed in Twitch account - *make sure you are signed in/sign into the BOT ACCOUNT and not your channel account*
 - `<channel_name>`: This is the name of your channel with no capitalization; i.e. as it would appear in your channel URL
 - `"salutations"`: This is an array of strings containing any and all salutations you want the app to test against; these items are **NOT** case sensitive; if you do not include atleast one salutation any mention will add that chatter to the queue
 - `<broadcaster_username>`: This is **YOUR** username; this is the username that will be tested for mentions, so only salutations at you are logged in the queue

## Running Hi-Q

Now that you've configured the app to connect to your channel's chat you can run the app in your terminal:

````
cd /path/to/install/folder/hiq
npm run hiq
````

For quicker access, consider saving the following alias to your startup file (typically `.bash_profile`):
````
alias hiq='cd /path/to/install/folder/hiq && npm run hiq'
````

If the app successfully connects to the client you will recieve the following notice in the terminal:
````
Hi-Q has connected to your Twitch channel and is now monitoring salutations!
````

Just let the app run and move the terminal to your non-primary monitor. When someone mentions you with any of the salutations you provided in `config.json`, a new notification will be added to the terminal telling you their name. 

Be sure to say 'Hi!' back!

### Dependencies
Hi-Q (Terminal Version) is made possible by and requires the use of two primary dependency packages:
 - [TMI.js](https://www.npmjs.com/package/tmi.js/) - a powerful JavaScript library for connecting to the Twitch API and IRC channels
 - [Colors](https://www.npmjs.com/package/colors) - a small package for leveraging terminal colors in console logs

### Contributing
If you would like to contribute to Hi-Q, just submit a pull request and the project maintainer will consider your changes. If your changes are not considered, please feel free to fork!

### Found a bug?
If you find a bug, please report it under **Issues** on this Github repo.

Thanks for your interest in Hi-Q! We are in the process developing a GUI version for users who do not want to manage Node packages or run the app in a terminal.
