// class ImageGallery extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { links: props.links };
//     }
//     remove = id => {
//         this.setState(state => ({
//             links: state.links.filter(el => el !== id)
//         }));
//     };
//     render() {
//         const { links } = this.state;
//         return (
//             <div>
//                 {links.map((item, index) => {
//                     return (
//                         <div key={item} className="image">
//                             <img key={index} src={item} alt="" />
//                             <button className="remove" onClick={() => this.remove(item)}>
//                                 X
//                             </button>
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     }
// }
//
// document.body.innerHTML = "<div id='root'> </div>";
//
// const rootElement = document.getElementById("root");
// const links = ["URL1", "URL2"];
// ReactDOM.render(<ImageGallery links={links} />, rootElement);
// document.querySelectorAll(".remove")[0].click();
// console.log(rootElement.innerHTML);