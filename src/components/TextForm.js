import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleClearClick = ()=> {
        let newText = ('');
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")
    }
    const handleOnChange = (event)=> {
        console.log("on change")
        setText(event.target.value)
    }
    const[text , setText] = useState('')
  return (
    <>
    <div className = "container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary my-3 mx1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>

            <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
