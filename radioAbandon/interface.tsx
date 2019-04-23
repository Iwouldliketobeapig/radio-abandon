import * as React from 'react';

export interface RadioAbandonProps {
  value?: any;
  onChange?: (value: any) => {};
  className?: string;
  disabled?: boolean;
  name?: string;
  options?: any[];
}