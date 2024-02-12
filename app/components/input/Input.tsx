import {UseFormRegister} from "react-hook-form";

type InputType = {
    register?: UseFormRegister<any>,
    rules?: {},
    type: 'text' | 'number',
    name: string,
    placeholder?: string,
    className?: string
}

const Input = ({register, rules, type, name, placeholder, className}: InputType) => {
    return (
        <label htmlFor={name}>
            <input
                {...register ? register(name, rules) : null}
                name={name}
                type={type}
                placeholder={placeholder}
                className={className}
            />
        </label>
    )
}

export default Input