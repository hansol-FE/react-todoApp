import React, { memo, PureComponent } from 'react';



const HabitAddForm = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //this.inputRef.current.value = '';
    formRef.current.reset();
  }
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className='add-input' placeholder='습관을 입력하세요' />
      <button className="add-button">add</button>
    </form>
  );
})






// class HabitAddForm extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef();
//   onSubmit = (e) => {
//     e.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     //this.inputRef.current.value = '';
//     this.formRef.current.reset();
//   }
//   render() {
//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         <input ref={this.inputRef} type="text" className='add-input' placeholder='습관을 입력하세요' />
//         <button className="add-button">add</button>
//       </form>
//     );
//   }
// }

export default HabitAddForm;