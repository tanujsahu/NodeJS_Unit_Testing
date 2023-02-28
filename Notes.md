# create project

    npm init --y

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

# write unit test E.G
    test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
    });

## Command 'jest' not found, but can be installed with:

    sudo apt install jest

# create script for run jest

     "jest-test": "jest"

# run test command

     npm run jest-test

# setup babel bcz jest dont have propper support of es6

     npm install @babel/core @babel/cli @babel/preset-env --save-dev

# Example

    touch .babelrc
    {
        "presets": [
        [
            "@babel/preset-env",
            {
            "targets": {
                "node": "current"
            }
            }
        ]
        ]
    }

# Three A Rules

- Arrange – setup the testing objects and prepare the prerequisites for your test.
- Act – perform the actual work of the test.
- Assert – verify the result.
