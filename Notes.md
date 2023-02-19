# create project
    npm init

# install nodemon
    npm install nodemon

# create indexJS file for logic
    touch index.js

# create script inside packageJson
    "start":"nodemon index.js"

# check your project is running or not
    npm run start

# install jest
    npm install --save-dev jest

# create test file
     touch index.spec.js

## Command 'jest' not found, but can be installed with:
    sudo apt install jest

# create script for run jest
     "jest-test": "jest"

# run test command
     npm run jest-test

# setup babel bcz jest dont have propper support of es6
     npm install @babel/core @babel/cli @babel/preset-env --save-dev


