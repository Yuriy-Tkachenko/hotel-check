import React from "react";
import { Input } from "../../styled/styled";
import { Label} from "../../styled/styled";
import { FilterForm } from "./styles";
import StyledButton from "../../ui/StyledButton/StyledButton";

export default function Form() {
  return (
    <FilterForm>
      <Label style={{ fontWeight: '500', marginBottom: '7px' }}>Локация</Label>
      <Input placeholder="Введите город" style={{ marginBottom: '16px', width: '296px' }}></Input>
      <Label style={{ fontWeight: '500', marginBottom: '7px' }}>Дата заселения</Label>
      <Input type='date' style={{ marginBottom: '16px', width: '296px' }}></Input>
      <Label style={{ fontWeight: '500', marginBottom: '7px' }}>Количество дней</Label>
      <Input type='number' style={{ marginBottom: '32px', width: '296px' }}></Input>
      <StyledButton>Найти</StyledButton>
    </FilterForm>
  )
}
