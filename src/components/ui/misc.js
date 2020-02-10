import React from "react";
import { Link } from "react-router-dom";

export const Tag = (props) => {
const template = <div
style={{
    background: props.bck,
    fontSize: props.size,
    color: props.color,
    padding: '5px 10px',
    display: 'inline-block',
    fontFamily: 'Righteous',
    ...props.add
}}
>{props.children}</div>

if (props.link){
    return (
        <Link to={props.linkTo}>
             {template}
        </Link>
    )
} else {
    return template;
}

}

export const firebaseLooper = (response) => {
    const data = []
    response.forEach((childResponse)=>{
        data.push({
            ...childResponse.val(),
            id:childResponse.key
        })
    })
    return data
}

export const reverseArray = (actualArray) => {
    let reversedArray = []

    for(let i=actualArray.length -1; i>=0 ; i--){
        reversedArray.push(actualArray[i])
    }
    return reversedArray
}

export const validate = (element) => {
    let error = [true,''];

    if(element.validation.required){
        const valid = element.value.trim() != ''
        const message = `${!valid ? 'this field is required' : ''}`
    }
}