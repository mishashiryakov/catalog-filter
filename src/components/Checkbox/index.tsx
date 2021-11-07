import React from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

interface ICheckbox {
  checked: boolean,
  className?: string,
  onChange: (name: string, checked: boolean, value: string) => void,
  name: string
  value: string
}

export const Checkbox = (props: ICheckbox) => {
  const { checked, className = '', onChange, name, value } = props;
  return (
    <input 
      type="checkbox"
      name={name}
      className={cn(styles.checkbox, className)} 
      checked={checked} 
      onChange={() => onChange(name, checked, value)}
    />
  )
}