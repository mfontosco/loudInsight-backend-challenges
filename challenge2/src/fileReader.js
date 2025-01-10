const fs = require('fs/promises');

const readSong = async (filePath) => {
   try {
      const song = await fs.readFile(filePath, 'utf8');
      console.log(`The Bard sings: ${song.trim()}`);
   } catch (error) {
      console.error('The Bard stumbles and forgets the song:', error.message);
   }
};

module.exports = { readSong };
