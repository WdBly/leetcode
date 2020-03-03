const deepClone = require('../src/deep-clone');

test('deep clone', () => {
    
    expect(deepClone("")).toEqual("");
    expect(deepClone(0)).toEqual(0);
    expect(deepClone([])).toEqual([]);

    var arr = [1, 2, "a", {a: 1}, function(){}, NaN, null, undefined, new Date(123), /123/];
    var obj = { asd:'asd' }; 
    var obj2 = { name:'aaaaa'};
    obj.ttt1 = obj2;
    obj.ttt2 = obj2;
    expect(deepClone(arr)).toEqual(arr);

    expect(deepClone({})).toEqual({});



    expect(deepClone(obj)).toEqual(obj);

    expect(deepClone(obj2)).toEqual(obj2);

});