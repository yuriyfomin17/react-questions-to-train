// function PlayerStatus() {
//     const [status, setStatus] = React.useState("online");
//     const [counter, setCounter] = React.useState(0);
//
//     // Toggle between the two status values - 'away' and 'online'
//     function toggleStatus() {
//         // Write your code here
//         if (status === 'online') {
//             setStatus('away')
//         }
//         if (status === 'away') {
//             setStatus('online')
//         }
//         console.log(status)
//
//     }
//
//     // Implement effect hook below.
//     // Update the counter when status changes.
//
//     React.useEffect(() => {
//         setCounter(counter + 1)
//     },[status]);
//
//     return (
//         <div>
//             <h1>{status}</h1>
//             <h3>{counter}</h3>
//             <button onClick={toggleStatus}>Toggle status</button>
//         </div>
//     );
// };
//
//
// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<PlayerStatus/>, rootElement);
// setTimeout(() => console.log(rootElement.innerHTML), 300);