// class Rating extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = ({
//             newArr: [{name: "*", class: ''}, {name: "*", class: ''}, {name: "*", class: ''}, {
//                 name: "*",
//                 class: ''
//             }, {name: "*", class: ''},]
//         })
//
//     }
//
//     changeClass = (index) => {
//         const copyData = this.state.newArr.map((el,i)=>{
//             if(i<=index){
//                 return {...el,class:'active'}
//             }
//             return {...el,class: ''}
//         })
//         this.setState({newArr:copyData})
//     }
//
//     render() {
//         return <div id='rating'>
//             {this.state.newArr.map((el, index) => <span className={el.class}
//                                                         onClick={() => this.changeClass(index)}>{el.name}</span>)}
//         </div>
//     }
// }
//
//
//
// document.body.innerHTML = "<div id='root'> </div>";
//
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Rating />, rootElement);
//
// document.querySelectorAll("span")[2].click();
// console.log(document.getElementById("rating").outerHTML);