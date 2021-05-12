const {AsyncParallelHook} = require('tapable');

const hook = new AsyncParallelHook();

hook.tapAsync('AsyncParallelHook1', (callback) => {
    console.log('start AsyncParallelHook1')
    setTimeout(() => {
        console.log('demo1')
        callback()
    }, 2000)
});

hook.tapAsync('AsyncParallelHook2', (callback) => {
    console.log('start AsyncParallelHook2')
    setTimeout(() => {
        console.log('demo2')
        callback()
    }, 1000)
});

hook.callAsync(() => {
    console.log('end')
})

