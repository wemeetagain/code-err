import ErrorCode from '../src/index.js'
import { expect } from 'chai'

describe('error-code', () => {
  const message = 'my message'
  const code = 'ESOME'
  interface Props {
    foo: 'bar'
    bar: 'foo'
  }
  const props: Props = {
    foo: 'bar',
    bar: 'foo'
  }

  it('should accept a message and add a code', () => {
    const err = new ErrorCode(message, code)

    expect(err).to.be.an.instanceof(ErrorCode)
    expect(err).to.be.an.instanceof(Error)
    expect(err.message).to.be.equal(message)
    expect(err.code).to.be.equal(code)
    expect(err.props).to.be.deep.equal({})
  })

  it('should accept a message and add a code & properties', () => {
    const err = new ErrorCode<Props>(message, code, props)

    expect(err).to.be.an.instanceof(ErrorCode)
    expect(err).to.be.an.instanceof(Error)
    expect(err.message).to.be.equal(message)
    expect(err.code).to.be.equal(code)
    expect(err.props.foo).to.be.equal(props.foo)
    expect(err.props.bar).to.be.equal(props.bar)
  })
})
