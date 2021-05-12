const {AsyncSeriesWaterfallHook} = require('tapable');

const hook = new AsyncSeriesWaterfallHook(['name']);

hook.tapAsync('AsyncSeriesWaterfallHook1', (name, callback) => {
    console.log('start AsyncSeriesWaterfallHook1')
    setTimeout(() => {
        console.log('demo1', name)
        callback(null,1)
    }, 1000)
});

hook.tapAsync('AsyncSeriesWaterfallHook2', (name, callback) => {
    console.log('start AsyncSeriesWaterfallHook2')
    setTimeout(() => {
        console.log('demo2', name)
    }, 2000)
});

hook.callAsync('luofei', (error) => {
    console.log('end', error)
})

