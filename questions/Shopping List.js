// const sampleItems = [
//     {
//         name: 'TV',
//         id: 876234812
//     }
// ];
//
// class ShoppingList extends React.Component {
//     constructor(props) {
//         const { items } = props;
//         super(props);
//         this.state = { items:items };
//         this.removeItem = this.removeItem.bind(this);
//     }
//
//     removeItem(id) {
//         // Write your code here
//         console.log(id)
//         const copyData =  this.state.items.filter(el=>el.id!==id)
//         console.log(copyData)
//         this.setState({items:copyData})
//     }
//
//     render() {
//         return(
//             <ul>
//                 { this.state.items.map( item =>
//                     <li key={item.id}> {item.name}
//                         <button id="removeBtn"
//                                 onClick={() => this.removeItem(item.id)}
//                                 type="button" >Remove</button>
//                     </li>
//                 )}
//             </ul>
//         );
//     }
// }
//
// document.body.innerHTML = "<div id='root'> </div>";
// const rootElement = document.getElementById( "root" );
// ReactDOM.render(<ShoppingList items = { sampleItems } />, rootElement);
//
// document.getElementById("removeBtn").click();
// setTimeout(() => console.log(rootElement.innerHTML));