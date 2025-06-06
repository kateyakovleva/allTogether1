const https = require('https');
const fs = require('fs');
const path = require('path');

const fonts = [
  {
    name: 'Figtree-Light',
    url: 'https://fonts.gstatic.com/s/figtree/v5/_Xmz-HUzqDCFdgfMsYiV_F7wfS-BQ.ttf',
  },
  {
    name: 'Figtree-Regular',
    url: 'https://fonts.gstatic.com/s/figtree/v5/_Xmz-HUzqDCFdgfMsYiV_F7wfS-BQ.ttf',
  },
  {
    name: 'Figtree-Medium',
    url: 'https://fonts.gstatic.com/s/figtree/v5/_Xmz-HUzqDCFdgfMsYiV_F7wfS-BQ.ttf',
  },
  {
    name: 'Figtree-SemiBold',
    url: 'https://fonts.gstatic.com/s/figtree/v5/_Xmz-HUzqDCFdgfMsYiV_F7wfS-BQ.ttf',
  },
  {
    name: 'Figtree-Bold',
    url: 'https://fonts.gstatic.com/s/figtree/v5/_Xmz-HUzqDCFdgfMsYiV_F7wfS-BQ.ttf',
  },
  {
    name: 'Figtree-ExtraBold',
    url: 'https://fonts.gstatic.com/s/figtree/v5/_Xmz-HUzqDCFdgfMsYiV_F7wfS-BQ.ttf',
  },
  {
    name: 'Figtree-Black',
    url: 'https://fonts.gstatic.com/s/figtree/v5/_Xmz-HUzqDCFdgfMsYiV_F7wfS-BQ.ttf',
  },
];

const fontsDir = path.join(__dirname, '../assets/fonts');

if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

fonts.forEach(font => {
  const filePath = path.join(fontsDir, `${font.name}.ttf`);
  const file = fs.createWriteStream(filePath);

  https.get(font.url, response => {
    response.pipe(file);

    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${font.name}`);
    });
  }).on('error', err => {
    fs.unlink(filePath);
    console.error(`Error downloading ${font.name}:`, err.message);
  });
}); 