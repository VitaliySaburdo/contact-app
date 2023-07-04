import React from 'react';
import { Container, Label, Input } from './Filter.styled';
import { findContact } from '../../redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    dispatch(findContact(e.target.value));
  };

  return (
    <Container>
      <Label>
        <Input
          
          size="small"
          type="text"
          label="Find contact by name"
          value={filter}
          onChange={changeFilter}
        />
      </Label>
    </Container>
  );
};
