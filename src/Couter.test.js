import React from 'react'
import Renderer from 'react-test-renderer'
import Counter from './Counter'

describe('Counter', () => {
  let component = null
it('renders', () => {
    component = Renderer.create(<Counter />)
  })
// increase 테스트
  it('increases', () => {
    component.getInstance().onIncrease()
    expect(component.getInstance().state.value).toBe(2)
    // increase 실행한 후 value 값이 2인지 확인
  })
// decrease 테스트
  it('decreases', () => {
    component.getInstance().onDecrease()
    expect(component.getInstance().state.value).toBe(1)
    // decrease 실행한 후 value 값이 1인지 확인
  })
})