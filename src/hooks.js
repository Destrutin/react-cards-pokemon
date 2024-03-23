import {useState, useEffect} from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useFlip = () => {
    const [state, setState] = useState(true);
    const toggleState = () => {
        setState(state => !state)
    }
    return [state, toggleState]
}

const useAxios = (url) => {
    const [response, setResponse] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                const newCard = {...res.data, id: uuid() }
                setResponse(data => [...data, newCard]);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
            
        };
        fetchData();
    }, [url]);
    return [response, setResponse];
}

export { useFlip, useAxios };