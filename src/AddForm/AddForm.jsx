import React from 'react';
import styled from './AddForm.module.css'

const AddForm = ({ onChange, values, onSubmit }) => {
  return (
    <form className={styled.form} onSubmit={onSubmit}>
      <label className={styled.label}>
        Название
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={values.name}
        />
      </label>
      <label className={styled.label}>
        Временная зона
        <input
          type="number"
          name="timeZone"
          onChange={onChange}
          value={values.timeZone}
        />
      </label>
      <button>Добавить</button>
    </form>
  );
};

export default AddForm;
