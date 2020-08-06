import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { DummyDataInput, dummyFormValues } from './dummy-data-input.component';
import { FormValues, initialFormValues } from '../../patient-registration.component';

describe('dummy data input', () => {
  let expectedFormValues: FormValues = initialFormValues;

  const setupInput = async () => {
    const { getByLabelText } = render(
      <DummyDataInput
        setValues={values => {
          expectedFormValues = values;
        }}
      />,
    );
    return getByLabelText('dummy data input') as HTMLButtonElement;
  };

  it('exists', async () => {
    const input = await setupInput();
    expect(input.type).toEqual('button');
  });

  it('can input data on button click', async () => {
    const input = await setupInput();

    fireEvent.click(input);
    await wait();

    expect(expectedFormValues).toEqual(dummyFormValues);
  });
});
