import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import Todo from '../todo'
//you can use test or describe when writing your test code
//describe the component you want to work on
// the 'it' talks about what you are trying to do
// eslint-disable-next-line jest/valid-title
describe(Todo, ()=>{
  it("counter displays correct initial count", ()=>{
    const { getByTestId } = render(<Todo initialCount={0}/>)
    const countValue = Number(getByTestId('count').textContent)
    expect(countValue).toEqual(0)
  })
  it("count should increase by 1 when the increment button is clicked", ()=>{
    const { getByTestId, getByRole } = render(<Todo initialCount={0}/>)
    const incrementBtn = getByRole('button',{name:'Increment'})
    fireEvent.click(incrementBtn)
    const countValue = Number(getByTestId('count').textContent)
    expect(countValue).toEqual(1)
  })
  it("count should decrease by 1 when the decrement button is clicked", ()=>{
    const { getByTestId, getByRole } = render(<Todo initialCount={0}/>)
    const incrementBtn = getByRole('button',{name:'Increment'})
    fireEvent.click(incrementBtn)
    const countValue1 = Number(getByTestId('count').textContent)
    expect(countValue1).toEqual(1)
    const decrementBtn = getByRole('button',{name:'Decrement'})
    fireEvent.click(decrementBtn)
    const countValue2 = Number(getByTestId('count').textContent)
    expect(countValue2).toEqual(0)
    const decrementBtn2 = getByRole('button',{name:'Decrement'})
    fireEvent.click(decrementBtn2)
    const countValue3 = Number(getByTestId('count').textContent)
    expect(countValue3).toEqual(-1)
  })
  it("count should restart when the restart button is clicked", ()=>{
    const { getByTestId, getByRole } = render(<Todo initialCount={10}/>)
    const restartBtn = getByRole('button',{name:'Restart'})
    fireEvent.click(restartBtn)
    const countValue = Number(getByTestId('count').textContent)
    expect(countValue).toEqual(0)
  })
  it("count should switch signs when the switchSign button is clicked", ()=>{
    const { getByTestId, getByRole } = render(<Todo initialCount={10}/>)
    const switchBtn = getByRole('button',{name:'Switch Signs'})
    const countSign = Number(getByTestId('count').textContent)
    expect(countSign).toEqual(10)
    fireEvent.click(switchBtn)
    const countSign2 = Number(getByTestId('count').textContent)
    expect(countSign2).toEqual(-10)
  })
})