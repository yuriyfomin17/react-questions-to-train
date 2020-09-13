// const sampleOptions = [
//     { id: "753", title: "This is the first option" },
//     { id: "035", title: "This is the second option" }
// ];
//
// class OptionsShower extends React.Component {
//     constructor(props) {
//         super(props);
//         const { options } = props;
//         this.state = { options:props.options, displayOptions: false };
//     }
//
//     displayOptions =()=> {
//
//         this.setState({
//             options: this.state.options,
//             displayOptions: !this.state.displayOptions
//         });
//     }
//
//     render(){
//         return (
//             <div>
//                 <button onClick={this.displayOptions}>
//                     {this.state.displayOptions ? "Hide options" : "Show options"}
//                 </button>
//                 {this.state.displayOptions? <ul id="options">
//                     {this.state.options.map(option => (
//                         <li key={option.id}>{option.title}</li>
//                     ))}
//                 </ul>:''}
//             </div>
//         );
//
//     }
// }
//
// document.body.innerHTML = "<div id='root'> </div>";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<OptionsShower options={sampleOptions} />, rootElement);