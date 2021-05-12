const {AsyncSeriesBailHook} = require('tapable');

const hook = new AsyncSeriesBailHook(['name']);

hook.tapAsync('AsyncSeriesBailHook1', (name, callback) => {
    console.log('start AsyncSeriesBailHook1')
    setTimeout(() => {
        console.log('demo1', name)
        callback()
        // callback(1)
    }, 2000)
});

hook.tapAsync('AsyncSeriesBailHook2', (name, callback) => {
    console.log('start AsyncSeriesBailHook2')
    setTimeout(() => {
        console.log('demo2', name)
        callback()
    }, 1000)
});

hook.callAsync('luofei', (error) => {
    console.log('end', error)
})

