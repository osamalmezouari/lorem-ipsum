import {useEffect, useRef, useState} from "react";
import textData from './data.js'
import './lorem.css'

const Lorem = () =>{
    const[text,setText] = useState([])
    const [index,setIndex] = useState(0)
    const numberRef = useRef()
    const getParagraphs = (e)=> {
        e.preventDefault()
        setIndex(numberRef.current.value)
    }
    useEffect(()=>{
        setText(textData.filter((paragraph,i)=>paragraph && i < index ))
    },[index])

    return <>
        <section>
            <h1 className={'title'}> TIRED OF BORING LOREM IPSUM? </h1>
            <form onSubmit={(e)=>getParagraphs(e)}>
                <span>Paragraphs:</span>
                <input ref={numberRef} type={'number'} max={8}></input>
                <button type={"submit"}>Generate</button>
            </form>
            <article>
                {text ? text.map((paragraph,i)=> {
                    return <p key={i}>{paragraph}</p>
                }) :""}
            </article>
        </section>
    </>
}
export default Lorem