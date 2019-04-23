import React, { PureComponent } from 'react';
import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/css'; 
import './index.less';
import { RadioAbandonProps } from './interface'

const CheckboxGroup = Checkbox.Group;

export default class RadioAbandon extends PureComponent<RadioAbandonProps, any> {
  constructor (props: RadioAbandonProps) {
    super(props);
    this.state = {
      value: '',
    }
  }

  componentDidMount () {
    this.setState({
      value: this.props.value,
    });
  }

  // shouldComponentUpdate (nextProps: RadioAbandonProps, nextState) {
  //   if (this.props.value !== nextProps.value) {
  //     return true;
  //   }
  //   return false;
  // }

  render () {
    const {onChange, value, className, ...props} = this.props;
    let valueOwn = [this.props.value];
    if (!valueOwn[0]) {
      valueOwn = [this.state.value]
    }
    return (
      <div className='antd-radio-abandon'>
        <CheckboxGroup 
          className={className}
          value={valueOwn}
          onChange={this.onChange}
          {...props}/>
      </div>
    );
  }

  private onChange = (value) => {
    let lastValue = value.pop();
    this.setState({
      value: lastValue,
    });
    if (this.props.onChange) {
      this.props.onChange(lastValue);
    }
  }
}