module.exports = {
  
  
  compose: (...funcs) =>
    (value) => funcs.reduce( (v,fn) => fn(v), value)
  ,
  
  curry: (fun, arg) =>
    (...args) => fun(...[arg, ...args])
  
}
