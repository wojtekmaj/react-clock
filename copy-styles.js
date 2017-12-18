const fs = require('fs');

fs.copyFile('./src/Clock.less', 'dist/Clock.less', (error) => {
  if (error) {
    throw error;
  }
  // eslint-disable-next-line no-console
  console.log('Clock.less copied successfully.');
});

fs.copyFile('./src/Clock.css', 'dist/Clock.css', (error) => {
  if (error) {
    throw error;
  }
  // eslint-disable-next-line no-console
  console.log('Clock.css copied successfully.');
});
