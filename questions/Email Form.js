// class App extends React.Component {
//     state = {
//         subject: '',
//         body: '',
//     };
//     onChange = ({ name, value }) => {
//         this.setState({
//             [name]: value,
//         });
//     };
//
//     render() {
//         console.log(this.state)
//         return (
//             <form>
//                 <FormField onChange={this.onChange} >
//                     <input
//                         name='subject'
//                         value={this.state.subject}
//                     />
//                 </FormField>
//                 <FormField onChange={this.onChange} >
//                     <input
//                         name="body"
//                         value={this.state.body}
//                     />
//                 </FormField>
//             </form>
//         );
//     }
// }