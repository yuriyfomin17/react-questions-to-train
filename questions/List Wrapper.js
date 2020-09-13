// function withList(ItemComponent) {
//
//
//     return class extends React.Component{
//
//         render() {
//             return <ItemComponent {...this.props}/>
//         }
//     }
//
//
//
// }
//
// class Link extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { items: props.items };
//
//     }
//
//     render() {
//         return <ul>
//             {this.props.items.map((el,index)=><li key={index}>
//                 <a href={el.href}>{el.text}</a>
//             </li>)}
//         </ul>;
//     }
// }
//
// const LinkList = withList(Link);
//
//
// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById("root");
//
// if (LinkList) {
//     let items = [{href: "https://www.google.com", text: "Google"},
//         {href: "https://www.bing.com", text: "Bing"}];
//     ReactDOM.render(<LinkList items={items}/>, rootElement);
//     console.log(rootElement.innerHTML);
// }