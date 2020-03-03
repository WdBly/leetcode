const getUrlParams = require('../src/get-url-params');

test('get url params', () => {
    
    expect(getUrlParams("")).toEqual({});
    expect(getUrlParams(123)).toEqual({});
    expect(getUrlParams({})).toEqual({});
    expect(getUrlParams([])).toEqual({});
    expect(getUrlParams(false)).toEqual({});
    expect(getUrlParams(null)).toEqual({});
    expect(getUrlParams(new String(""))).toEqual({});
    expect(getUrlParams(NaN)).toEqual({});


    expect(getUrlParams("https://www.wddsss.com?a=1&b=2&c&d=可以的#kk")).toEqual({
        a: "1",
        b: "2",
        c: "",
        d: "可以的"
    });

    expect(getUrlParams("https://www.wddsss.com:8080?a=1&b=2&c&d=可以的#kk")).toEqual({
        a: "1",
        b: "2",
        c: "",
        d: "可以的"
    });

    expect(getUrlParams("https://www.wddsss.com:8080?a=1&b=2&c&d=可以的?ll=123#kk")).toEqual({
        a: "1",
        b: "2",
        c: "",
        d: "可以的?ll"
    });
    expect(getUrlParams("https://www.wddsss.com:8080?a=1&b=2?c=3&c&d=可以的?ll=123#kk")).toEqual({
        a: "1",
        b: "2?c",
        c: "",
        d: "可以的?ll"
    });

});