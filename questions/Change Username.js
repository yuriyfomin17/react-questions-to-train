// class Username extends React.Component {
//     state = { value: "" };
//
//     changeValue(value) {
//         this.setState({ value });
//     }
//
//     render() {
//         const { value } = this.state;
//         return <h1>{value}</h1>;
//     }
// }
//
// function App() {
//     const ref = React.useRef()
//     const inputRef = React.useRef()
//
//     function clickHandler() {
//         ref.current.changeValue(inputRef.current.value)
//     }
//
//
//     return (
//         <div>
//             <button onClick={clickHandler}>Change Username</button>
//             <input type="text" ref={inputRef}  />
//             <Username ref={ref} />
//         </div>
//     );
// }
//
// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);