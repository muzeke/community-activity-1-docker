#!/bin/bash

# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Load nvm
. ~/.nvm/nvm.sh 

# Install Node.js 16
nvm install 16 

# Verify Node.js version
node -e "console.log('Running Node.js ' + process.version)"

# Install pm2 globally
npm install -g pm2
