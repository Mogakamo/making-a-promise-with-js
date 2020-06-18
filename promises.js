function myAsyncFn() {
    const everythingWentWell = true;
    return new Promise(function(resolve, reject) {
        //Do something here
        //usually an ajax call
        //or other async call
        if (everythingWentWell) {
            resolve('Success!');
        } else {
            reject('Things did not go well : (')
        }
    });
}

function secondAsyncFn() {
    return Promise.resolve('This second function is much more concise...')
}

function init() {
    myAsyncFn().then(secondAsyncFn).then(function(response) {
            alert(response);
        })
        .catch(function(err) {
            alert(err);
        });
}
init();