export function higher_order_unctions() {
    const withCounter = cb => {
        let counter = 0
        return (...args) => {
          console.log(`Counter is ${++counter}`)
          return cb(...args)
        }
      }
      
      const add = (x, y) => x + y
      const countedSum = withCounter(add)
      
      console.log("countedSum:",countedSum)
      console.log(countedSum(2, 3))
      console.log(countedSum(2, 4))
}
