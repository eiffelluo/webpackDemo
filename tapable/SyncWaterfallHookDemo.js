const {SyncLoopHook} = require('tapable');

const hook = new SyncLoopHook(['num']);

let index = 0
hook.tap('first', (num) => {
    if (index < 5) {
        console.log(index)
        index+=1
        return index
    }
});


hook.call();