const towSum = require('../src/tow-sum');

test('tow sum [1, 3, 4, 7, 9], 8 equal [0, 3]', () => {
    
    expect(towSum([], 2)).toEqual([]);

    expect(towSum({}, 2)).toEqual([]);

    expect(towSum({}, [])).toEqual([]);
    
    expect(towSum([], 2.2)).toEqual([]);
    
    expect(towSum([1, 3, 7.4], 2)).toEqual([]);

    expect(towSum([1, 3, 4, 7, 9], 8)).toEqual([0,3]);
    
    expect(towSum([4, 6, 7, 7], 13)).toEqual([1,2]);

    expect(towSum([4, 6, -5, -4], -9)).toEqual([2,3]);

});