import test from 'ava'

test('foo', t => {
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})

test('baz', async t => {
  const bar = Promise.resolve('bar')
  t.truthy(await bar)
})
