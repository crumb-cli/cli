console.time('aaa')
function test () {
  for(let i = 0; i < 100000; i++) {}
  console.log('123')
}

test()
console.timeEnd('aaa')