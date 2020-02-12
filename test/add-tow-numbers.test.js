const towArraySum = require('../src/add-tow-numbers');

test('tow array [1, 3, 4, 7, 9], [1, 2, 4] equal [2, 5, 8, 7, 9]', () => {
    
    expect(towArraySum([1, 3, 4, 7, 9], [1, 2, 4])).toEqual([2, 5, 8, 7, 9]);
    
    expect(towArraySum([2,4,3], [5,6,4])).toEqual([7,0,8]);

});