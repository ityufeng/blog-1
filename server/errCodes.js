module.exports = {
    '400': '用户名密码错误',
    '401': 'token验证失败，请重新登录',
    '10002': 'token解密发生错误',
    //数据库
    '20001': '该用户不存在，请重新登录',
    '20002': '查询出现错误，请查看相关信息',
    '20003': '没有查询到符合条件的结果',
    '20006': '数据删除出现错误',
    '20007': '该数据已经存在',
    '20008': '数据库添加信息失败',
    //redis
    '30001': 'redis操作发生错误，请检测',
    '30002': 'redis获取key值失败，key值已过期',
    '30003': 'redis token已被使用一次，不能再继续使用',
    '30004': 'redis生成key值失败',
}