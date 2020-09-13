// class TabStrip extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={activeIndex:1}
//     }
//
//     render() {
//         return (
//             <div className="TabStrip">
//                 {this.props.titles.map((title, index) => {
//                     const className =
//                         (this.isActive(index) ? " TabStrip-title-active" : "TabStrip-title");
//
//                     return (
//                         <div onClick={() => this.setActiveIndex(index)} key={index} className={className}>
//                             {className}
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     }
//
//     isActive(index) {
//         return index === this.getActiveIndex();
//     }
//
//     setActiveIndex(activeIndex) {this.setState({activeIndex:Number(activeIndex)})}
//
//     getActiveIndex() { return this.state.activeIndex}
// }
//
// class App extends React.Component {
//     state = { activeIndex: 1 };
//     render() {
//         return (<div>
//             <TabStrip activeIndex={this.state.activeIndex}
//                       onActiveIndexChange={activeIndex => {
//                           this.setState({
//                               activeIndex
//                           });
//                       }}
//                       titles={["My account", "Settings", "Dashbboard"]}
//             />
//         </div>);
//     }
// }
//
// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById("root");