import React from 'react'
import { useState } from 'react'

import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'

const NewTodo = ({handleAdd}) => {

    const [task, settask] = useState("")

    console.log(task);
    
    const handleSubmit = ()=> {
        handleAdd(task)
        settask("")
    }

    return (
        <div >

            <Form style={{display:'flex', gap:'5px', alignItems:'center', flexDirection:'column'}}>
                <FormGroup row>
                        <Input
                            placeholder="new item"
                            type="text"
                            value={task}
                            onChange={(e)=>settask(e.target.value)}
                        />
                        <Button onClick={()=>handleSubmit()} disabled={!task}>Add</Button>
                        
                </FormGroup>
            </Form>
        </div>
    )
}
export default NewTodo