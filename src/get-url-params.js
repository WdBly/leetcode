/**
 * 获取url参数的方法
 */


const getUrlParams = url => {
    let result = {}, typeErr, temp = {};
    if(typeof url !== "string" || !url) {
        return result;
    }

    url.replace(/(^.*?\?)|(#.*)/g, "").split(/&/).map(item => item.split(/=/)).reduce((prev, next) => {
        prev[next[0]] = next[1] || "";
        return prev;
    }, result);

    return result;
};

module.exports = getUrlParams;