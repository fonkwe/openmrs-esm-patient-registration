import React from 'react';
import { useField } from 'formik';
import styles from './../input.css';

interface SelectInputProps {
  name: string;
  options: Array<string>;
}

export const SelectInput: React.FC<SelectInputProps> = ({ name, options }) => {
  const [field, meta] = useField(name);
  const selectOptions = [
    <option key="" value="" disabled>
      Choose
    </option>,
    options.map(currentOption => (
      <option key={currentOption} value={currentOption}>
        {currentOption}
      </option>
    )),
  ];

  return (
    <main className={styles.field}>
      <select
        className={`omrs-dropdown omrs-type-body-regular ${meta.touched && meta.error ? styles.errorInput : null} ${
          styles.selectInput
        }`}
        {...field}>
        {selectOptions}
      </select>
      {meta.touched && meta.error ? (
        <div className={`omrs-type-body-small ${styles.errorMessage}`}>{meta.error}</div>
      ) : null}
    </main>
  );
};
