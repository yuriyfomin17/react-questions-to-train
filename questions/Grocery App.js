// const Product = props => {
//     const plus = () => {
//         // Call props.onVote to increase the vote count for this product
//         props.onVote('+',props.index);
//     };
//     const minus = () => {
//         // Call props.onVote to decrease the vote count for this product
//         props.onVote('-',props.index);
//     };
//     return (
//         <li>
//             <span>{props.name}</span> - <span>votes: {props.votes}</span>
//             <button onClick={plus}>+</button>{" "}
//             <button onClick={minus}>-</button>
//         </li>
//     );
// };
//
// class GroceryApp extends React.Component {
//
//     // Finish writing the GroceryApp class
//
//     constructor(props){
//         super(props);
//         this.state = {
//             products: this.props.products
//         }
//     }
//
//     onVote = (dir, index) => {
//         // Update the products array accordingly ...
//         const updatedProducts = [...this.state.products];
//         if(dir==='+'){
//             updatedProducts[index].votes = updatedProducts[index].votes+1;
//             this.setState({
//                 products: updatedProducts
//             })
//         }
//         else {
//             updatedProducts[index].votes = updatedProducts[index].votes-1;
//             this.setState({
//                 products: updatedProducts
//             })
//         }
//     };
//
//     render() {
//         console.log(this.state.products);
//         return (
//             <ul>
//                 {
//                     this.state.products.map((item,ind)=>{
//                         return <Product key={item.name} index={ind} onVote = {this.onVote} name={item.name} votes={item.votes}></Product>;
//                     })
//                 }
//             </ul>
//         );
//     }
// }
//
// document.body.innerHTML = "<div id='root'></div>";
//
// ReactDOM.render(<GroceryApp
//     products={[
//         { name: "Oranges", votes: 0 },
//         { name: "Apples", votes: 0 },
//         { name: "Bananas", votes: 0 }
//     ]}
// />, document.getElementById('root'))