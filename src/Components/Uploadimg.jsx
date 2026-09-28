import { useState,useRef } from "react";
import "../App.css"
export default function Uploadimg() {
    const fileInputRef = useRef(null);
    const [image,setImage]=useState(null);
return (
    <div className="image-section">
    <h2>Image Upload</h2>
    <input type="file" ref={fileInputRef} accept="iamge/*" style={{display:"none"}} onChange={(event)=>{
        const selectedFile =event.target.files[0];
        setImage(selectedFile);
    }}/>
    <button className="upload-btn" onClick={()=> fileInputRef.current.click()}>{image ? "change Image" : "Upload Image"}</button>
    {image &&(
        <div className="preview-section">
            <h3>Selected Image</h3>
            <img src={URL.createObjectURL(image)} alt="Preview" width="300" />
        </div>
    )}
    </div>
)
}
