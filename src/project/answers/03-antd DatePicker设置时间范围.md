

# antd 设置时间范围

```jsx
/** 不可选择的时间 */
  const disabledDate: RangePickerProps<Moment>['disabledDate'] = current => {
    return (
      current < moment().startOf('day') || current > moment().add(30, 'day')
    );
  };
	
   <DatePicker bordered={false} disabledDate={disabledDate} /> 
/** 只展示当前年份-2008年 */
```