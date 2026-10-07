import {useState,useEffect} from "react";
import axios from "axios";

export default function useFetchData(url) {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const[error,setError]= useState("");
    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setData(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            setError("Failed to fetch data");
            setLoading(false)
        });
    },[url]);
return {data,loading,error};

}
