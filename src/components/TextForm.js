import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case", "success");
    }

    const handleToLower = ()=>{
        //console.log("Upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case", "success");
    }

    const handleToClear = ()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Copied to Clipboard");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    // const clickingIndex = ()=>{
    //     let x = prompt("enter the name");
    //     let index = text.indexOf(x);
    //     alert(index);
    // }

    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color : props.mode==="dark"?"white":"#050239"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==="dark"?"grey":"white", color : props.mode==="dark"?"white":"#050239"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleToLower}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleToClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>CopyText</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        {/* <button className="btn btn-primary mx-1" onClick={clickingIndex}>Index</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button> */}
    </div>
    <div className="container my-3" style={{color : props.mode==="dark"?"white":"#050239"}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read...</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textarea to preview it here"}</p>
    </div>
    </>
  )
}
