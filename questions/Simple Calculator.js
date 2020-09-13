// const OPERATIONS = {
//     ADD: "ADD",
//     SUBTRACT: "SUBTRACT"
// };
//
// function App() {
//     const [number, updateNumber] = React.useState(0);
//     const [index, setIndex] = React.useState(false)
//     const [state, dispatch] = React.useReducer((state, action) => {
//
//         /* implement reducer */
//         switch (action.type) {
//             case OPERATIONS.ADD:
//                 if(!index){
//                     state = number
//                     setIndex(!index)
//                 }else{
//
//                     return state + number
//                 }
//
//
//             case OPERATIONS.SUBTRACT:
//                 if(!index){
//                     state = number
//                     setIndex(!index)
//                 }else{
//
//                     return  state-number
//                 }
//
//
//         }
//
//         return state;
//     }, number);
//
//     /* implement dispatches */
//     const add = () => dispatch({type:'ADD'});
//     const subtract = () => dispatch({type:'SUBTRACT'});
//
//     const handleNumberChange = e => updateNumber(Number(e.target.value));
//
//     return (
//         <div>
//             <div id="result">{state}</div>
//             <div>
//                 <button id="add" onClick={add}>Add</button>
//                 <button id="subtract" onClick={subtract}>Subtract</button>
//             </div>
//             <div>
//                 <input type="text" value={number} onChange={handleNumberChange} />
//             </div>
//         </div>
//     );
// }
//
// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);