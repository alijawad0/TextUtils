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
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success")
    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        document.getSelection().removeAllRanges();
        props.showAlert("Extra spaces removed", "success")
    }
    const handleOnChange = (event)=> {
        setText(event.target.value)
    }
    const[text , setText] = useState('')
  return (
    <>
    <div className = "container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'#13466e':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>

            <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview!"}</p>
    </div>
    </>
  )
}
