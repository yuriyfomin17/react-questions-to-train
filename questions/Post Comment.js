// const CommentList = (props) => {
//     const [arrPost, setArr] = React.useState([])
//     const [inputValue, setInput] = React.useState('')
//     const changePost =()=>{
//         if(inputValue!==''){
//             const copyData = arrPost.slice()
//             copyData.push(inputValue)
//             setInput('')
//             setArr(copyData)
//
//         }
//
//     }
//     return (<div>
//         <form>
//             <input type="text" value={inputValue} onChange={(e)=>setInput(e.target.value)}/>
//             <input type="button" value="Post" onClick={changePost}/>
//         </form>
//         <ul>
//             {arrPost.map((el,index)=><li key={index}>{el}</li>)}
//         </ul>
//     </div>);
// }
//
// document.body.innerHTML = "<div id='root'> </div>";
//
// const rootElement = document.getElementById("root");
// ReactDOM.render(<CommentList />, rootElement);
//
// var input = document.querySelector("input[type='text']");
// input.value = "test";
// input._valueTracker.setValue("");
// input.dispatchEvent(new Event('change', { bubbles: true }));
//
// document.querySelector("input[type='button']").click();
// console.log(document.getElementsByTagName("ul")[0].innerHTML);