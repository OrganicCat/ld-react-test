export const partial = (func, ...args) => func.bind(null, ...args)

const _pipe = (funcX, funcY) => (...args) => funcY(funcX(...args))

export const pipe = (...funcs) => funcs.reduce(_pipe)