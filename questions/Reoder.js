const List = (props) => {

    const [arr, setArr] = React.useState(props.items)
    console.log(arr)
    const changePlace =(index)=>{
        const copyData = arr.slice()
        const removed = copyData.splice(index,1)
        copyData.unshift(removed)
        setArr(copyData)
    }
    return  (<div>
        <ul>
            {arr.map((el,index)=><li onClick={()=>changePlace(index)}>{el}</li>)}
        </ul>
    </div>)
}

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<List items={["A", "B", "C"]} />, rootElement);

let listItem = document.querySelectorAll("li")[1];
if(listItem) {
    listItem.click();
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));