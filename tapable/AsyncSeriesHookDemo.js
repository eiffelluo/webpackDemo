const {AsyncSeriesHook} = require('tapable');

const hook = new AsyncSeriesHook(['name']);

hook.tapAsync('AsyncSeriesHook1', (name, callback) => {
    console.log('start AsyncSeriesHook1')
    setTimeout(() => {
        console.log('demo1', name)
        callback()
    }, 2000)
});

hook.tapAsync('AsyncSeriesHook2', (name, callback) => {
    console.log('start AsyncSeriesHook2')
    setTimeout(() => {
        console.log('demo2', name)
        callback()
    }, 1000)
});

hook.callAsync('luofei', (error) => {
    console.log('end', error)
})

