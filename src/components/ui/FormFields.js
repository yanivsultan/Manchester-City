import React from 'react';


const FormField = (props) => {
    const id = props.id
    const renderTemplate = () => {
        let formTemplate = null;
         
        switch(props.formData.element){
            case('input'):
                formTemplate = (
                    <div> 
                        <input 
                        {...props.formData.config}
                        value={props.formData.value}
                        onChange={(event)=>{props.change({event, id})}}
                        />
                    </div>
                )

             break;
             default:
                 formTemplate=null;
        }
        return formTemplate;
    }

    return <div>
        {renderTemplate()} 
    </div>
}

export default FormField