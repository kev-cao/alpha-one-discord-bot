# alpha-one-discord-bot
A discord bot that responds with "I can't believe it's not butter" when appropriate and also responds with "INDEEEEEEEEEEEED" when a user types "indeed" in a message.


## Context
This was the first Discord bot I ever built. All it does is trigger when a message event occurs, and if the message matches with a triggering string, the bot will respond.

## How to Use
Run `npm install` to download the required NodeJS libraries.

The code can only be used if a Discord bot is created on Discord's developer website. Once created, create an `auth.json` config file that contains the unique token provided to you by Discord. The `json` file should have a key `token` that maps to the provided token.
