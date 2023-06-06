import fs from 'node:fs';

fs.copyFile('src/Clock.css', 'dist/Clock.css', (error) => {
  if (error) {
    throw error;
  }
  // eslint-disable-next-line no-console
  console.log('Clock.css copied successfully.');
});
