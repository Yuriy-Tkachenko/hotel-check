import React from 'react';
import { Button } from './styles'; 

const StyledButton = ({children}) => {
  return (
    <Button>{ children }</Button>
  )
}

export default StyledButton;
