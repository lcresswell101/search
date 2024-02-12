import {DefaultValues, FieldValues, SubmitHandler, useForm} from "react-hook-form";
import React from "react";

const Form = function<T extends FieldValues>({ defaultValues, children, onSubmit }: { defaultValues?: DefaultValues<T>, children: React.ReactNode, onSubmit:  SubmitHandler<T> }) {
    const methods = useForm<T>({ defaultValues })
    const { handleSubmit, formState: {errors} } = methods

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            { React.Children.count(children) && React.Children.map(children, (child) => {
                return React.isValidElement(child)  && child.props.name
                    ? React.createElement(child.type, {
                        ...{
                            ...child.props,
                            register: methods.register,
                            key: child.props.name,
                        },
                    })
                    : child
            }) }
        </form>
    )
}

export default Form