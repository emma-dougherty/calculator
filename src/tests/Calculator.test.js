import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    let runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it ('should add two numbers and give total', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const add = container.getByTestId('operator_add');
    fireEvent.click(add);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const total = container.getByTestId('operator-equals');
    fireEvent.click(total);
    let runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  })

  it ('should subtract 1 number from another and give total', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const subtract = container.getByTestId('operator-subtract');
    fireEvent.click(subtract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const total = container.getByTestId('operator-equals');
    fireEvent.click(total);
    let runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it ('should multiply 1 number with another and give total', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const multiply = container.getByTestId('operator-multiply');
    fireEvent.click(multiply);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const total = container.getByTestId('operator-equals');
    fireEvent.click(total);
    let runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  })

  it ('should divide 1 number by another and give total', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const divide = container.getByTestId('operator-divide');
    fireEvent.click(divide);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const total = container.getByTestId('operator-equals');
    fireEvent.click(total);
    let runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  })

  it ('should concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const total = container.getByTestId('operator-equals');
    fireEvent.click(total);
    let runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('2173');
  })

  it ('should chain multiple operations together', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const add = container.getByTestId('operator_add');
    fireEvent.click(add);
    const button6 = container.getByTestId('number6');
    fireEvent.click(button6);
    const multiply = container.getByTestId('operator-multiply');
    fireEvent.click(multiply);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const total = container.getByTestId('operator-equals');
    fireEvent.click(total);
    let runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('14');
  })

  it ('should clear the running total without affecting the calculation', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const subtract = container.getByTestId('operator-subtract');
    fireEvent.click(subtract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const total = container.getByTestId('operator-equals');
    fireEvent.click(total);
    const clear = container.getByTestId('clear');
    fireEvent.click(clear);
    const add = container.getByTestId('operator_add');
    fireEvent.click(add);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const newtotal = container.getByTestId('operator-equals');
    fireEvent.click(newtotal);
    let runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('8');
  })
})

