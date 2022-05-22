# Game of Life
This is a "Game of Life" game based on: [wiki](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).
Board size: 50x50.

There are client and server sides to this game.

The client side controls the whole game and contains the following:
- 4 buttons:
- - Next - plays next generation.
- - Start - plays the game automatically.
- - Stop - stops the automatic game.
- - Reset - restars the board.
- Game board - where everything is drawn to.

The server side calculates the next generation and returns the next board.

## Installation & Running the game
### Locally:
1. Git clone this repository
2. Run the server and client:

Server:
`cd server`
`npm i`
`npm run start-dev`

Client:
`cd client`
`npm i`
`npm start`

### Remotely:
Simply visit this url: [click here](https://dima-game-of-life.netlify.app/)

## Technologies
### Client
- ReactJS
- Axios
- React Query
- Styled components

### Server
- NodeJS
- Express

Both client and server were written with TypeScript.

## Architecure
### Client
- api - holds all the functionality and constants to send requests to server
- common - holds global constants with game functionality
- components - contains reusable components
- screens - contains the game screen
- types - contains typescript types

### Server
- common - contains all the shared functionality like utils
- config - all configurations for server start-up like express config and routes
- environments - environment variables
- middlewares - all common middlewares like adding request id to the request
- life - an api - which contains:
- - route - express routes
- - validator - middleware that checks the input from client
- - controller - receives express request and calls the service
- - service - the actual functions that process the request
- - type - contains typescript types
- - game - game logic functionality


## Game example
### New game
The player can select the cells for initial start.
![Screen Shot 2022-05-22 at 19 48 58](https://user-images.githubusercontent.com/12968098/169706515-22e61cc9-13b8-45a0-b8cd-d854c73f8097.png)

### The runs automatically
On pressing "Start" the game runs automatically, player can stop the simulation and run each step with "Next" button.
![Screen Shot 2022-05-22 at 19 50 10](https://user-images.githubusercontent.com/12968098/169706531-467c4952-008c-4e91-a96a-f9f1a4fd0a1c.png)

### End game
When there are no alive cells left the game ends and the player can reset the game.
![Screen Shot 2022-05-22 at 19 54 20](https://user-images.githubusercontent.com/12968098/169706606-0b510b11-0ecd-48df-8ac9-36652af39f6f.png)

## Future development
### More sophisticated UI
- Add animations
- Add icons instead of text to make it feel more game-like
