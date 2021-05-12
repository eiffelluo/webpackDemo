const {SyncBailHook} = require('tapable');

const hook = new SyncBailHook(['aa']);

hook.tap('first', (name) => {
    console.log('first', name);
});

hook.tap('second', (name) => {
    console.log('second', name);
    return 1
});

hook.tap('third', (name) => {
    console.log('third', name);
});

hook.call('luofei',);