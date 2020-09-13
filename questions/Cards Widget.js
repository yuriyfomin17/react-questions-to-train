// const Cards = (props) => {
//     const [cards, setCards] = React.useState(new Array(props.amount).fill('down'))
//
//     const changeCard = (index) => {
//         const copyData = new Array(props.amount).fill('down')
//         copyData[index] = 'up'
//         setCards(copyData)
//     }
//     return <table>
//         <tbody>
//         <tr>
//             {cards.map(function (el,index) {
//                 return <td key={index} onClick={()=>changeCard(index)}>{el}</td>
//             })}
//         </tr>
//         </tbody>
//     </table>
// };
//
// document.body.innerHTML = "<div id='root'> </div>";
//
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Cards amount={4}/>, rootElement);
//
// let row = document.getElementById("root").getElementsByTagName("tr")[0];
// if (row) {
//     let cell = row.getElementsByTagName("td")[1];
//     console.log('CELL',cell)
//     if (cell) {
//         cell.click();
//     }
// }
// setTimeout(() => console.log(document.getElementById("root").innerHTML));