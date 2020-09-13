// class ContactForm extends React.Component {
//     state = {
//         firstName:'',
//         age:'',
//         email:''
//     }
//     onChange = (name, value) => {
//         const copyDat = this.state
//         copyDat[name] = value
//         this.setState(copyDat)
//         console.log(this.state)
//     };
//
//     render() {
//         return <div>
//
//             <input name='firstName'  onChange={(e)=>this.onChange('firstName',e.target.value)}/>
//             <input name='age'   onChange={(e)=>this.onChange('age', e.target.value)}/>
//             {this.state.age>=14?<input name='email' onChange={(e)=>this.onChange('email', e.target.value)}/>:''}
//
//         </div>
//     }
// }
//
// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<ContactForm/>, rootElement);