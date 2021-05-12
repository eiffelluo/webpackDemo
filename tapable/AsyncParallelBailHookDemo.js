const {AsyncParallelBailHook} = require('tapable');

const hook = new AsyncParallelBailHook();

hook.tapAsync('AsyncParallelBailHook1', (callback) => {
    console.log('start AsyncParallelBailHook1')
    setTimeout(() => {
        console.log('demo1')
        callback()
    }, 2000)
});

hook.tapAsync('AsyncParallelBailHook2', (callback) => {
    console.log('start AsyncParallelBailHook2')
    setTimeout(() => {
        console.log('demo2')
        callback(1)
    }, 1000)
});

hook.callAsync(() => {
    console.log('end')
})

