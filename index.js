const fs = require('fs')
const promise = new Promise((res, reject) => {
    res('message');
});

promise.then(data => {
    console.log(data)
})

const makeFile = async(fileName, content) => {
    try {
        await fs.writeFile(fileName, content, (err) => {
            if(err) throw err;
        });
    } catch (err) {
        console.log('Failed with error', err);
    }
}

makeFile('node-lms-assignment.txt', 'hello from office');
