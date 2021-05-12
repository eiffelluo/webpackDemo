const {SyncHook} = require('tapable');

const hook = new SyncHook(['name','age']);

hook.tap('first', (name,age) => {
    console.log('first', name,age);
});

hook.tap('second', (name) => {
    console.log('second', name);
});

hook.tap({
    name: 'third',
    // 把 third 事件回调放到 second 之前执行
    before: 'second',
}, (name) => {
    console.log('third', name);
});

hook.call('luofei',10);