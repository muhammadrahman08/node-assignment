const promise = new Promise((res, reject) => {
    res('message');
});

promise.then(data => {
    console.log(data)
})
