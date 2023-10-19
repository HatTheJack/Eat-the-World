import { hiveManager, tickHour } from '@/assets/js/functions.js';

let gameData = {}; // Initialize gameData to null

// Set up an event listener for messages from the main thread
self.onmessage = function (event) {
  if (event.data.type === 'initialize') {
    // Parse the serialized gameData object
    gameData.value = JSON.parse(event.data.gameData);
  }
};

function loop(timesToLoop = 1) {
  if (gameData !== null) {
    for (let i = 0; i < timesToLoop; i++) {
        tickHour(24, gameData);
        hiveManager.expandHive(0,0.00001, gameData);
    }
    self.postMessage({ type: 'update', gameData: JSON.stringify(gameData) });
    // You can use gameData here as it should be properly initialized
  }
}


// Check if gameData is ready before using it
setInterval(loop, 1000);
