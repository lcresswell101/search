import {className} from "postcss-selector-parser";
import {UseFormRegister} from "react-hook-form";

type InputType = {
    register: UseFormRegister<any>,
    type: 'text' | 'number',
    name: string,
    placeholder?: string,
    className?: string
}

const Input = ({register, type, name, placeholder, className}: InputType) => {
    return (
        <label htmlFor={name}>
            <input
                {...register(name)}
                name={name}
                type={type}
                placeholder={placeholder}
                className={className}
            />
        </label>
    )
}

export default Input