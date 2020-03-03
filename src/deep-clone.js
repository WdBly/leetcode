

const deepCopy = target => {
    //此数组解决了循环引用和相同引用的问题，它存放已经递归到的目标对象 
    let copyed_objs = [];
    function _deepCopy(target){
        if((typeof target !== "object") || !target) {
            return target;
        }
        for(let i = 0; i < copyed_objs.length; i++) {
            if(copyed_objs[i].target === target) {
                return copyed_objs[i].copyTarget;
            }
        }
        let obj = {};
        if(Array.isArray(target)) {
            obj = [];
        }else if(Object.prototype.toString.call(target) !== "[object object]") {
            return target;
        }

        copyed_objs.push({target, copyTarget: obj});

        Object.keys(target).forEach(key => { 
            if(obj[key]) {
                return;
            } 
            obj[key] = _deepCopy(target[key]);
        });
        return obj;
    }

    return _deepCopy(target);
}

module.exports = deepCopy;