import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase());
    }
    const handleLowClick=()=>{
        setText(text.toLowerCase());
    }
    const handleclearClick=()=>{
        setText(' ');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState('Enter text here');
    return (
        <>
            <div style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='light'?'#e9e9e9':'white'}} id="mybox" rows="10"></textarea>
                </div> 
                <button className="btn mx-2 bg-info" onClick={handleUpClick}>Convert to Uppercase</button> 
                <button className="btn mx-2 bg-info" onClick={handleLowClick}>Convert to lowercase</button> 
                <button className="btn mx-2 bg-info" onClick={handleclearClick}>Clear text</button> 
            </div>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text analysis and summary</h1>
                <p><b>{text.split(" ").length-1}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{0.008*text.split(" ").length-0.008}</b> minutes should be taken to read the content entered.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
