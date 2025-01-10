const { readSong } = require('./fileReader');

const simulateMessageFlow = async () => {
  // Announce the King’s arrival
  console.log('The King has entered the court');

  // Advisor whispers an urgent matter
  process.nextTick(() => {
    console.log('Your Majesty, there’s an urgent matter.');
  });

  // Schedule a bard's song asynchronously
  readSong('./bardSong.txt');

  // Schedule the Jester's act (setTimeout with 0 ms delay)
  setTimeout(() => {
    console.log('The Jester performs a quick act!');
  }, 0);

  // Announce the end of the court session
  console.log('The court session has ended.');
};

module.exports = { simulateMessageFlow };
