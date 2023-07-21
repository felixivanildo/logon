import { useState } from "react";
import React from "react";
import PatternFrom from "./PatternForm/PatternForm";
import { useForm } from "react-hook-form"

function Teste() {
    const [formtype, setFormtype] = useState([{}]);
    const { register, handleSubmit } = useForm({
        shouldUseNativeValidation: true,
    })
    const onSubmit = async (data) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("firstName", {
                        required: "Please enter your first name.",
                    })} // custom message
                />
                <input
                    {...register("lastName", {
                        required: "Please enter your last name.",
                    })} // custom message
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Teste