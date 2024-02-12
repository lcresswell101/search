type ButtonType = {
    type: 'button' | 'submit'
    text: string,
    className?: string,
    disabled?: boolean,
}

const Button = ({ type = 'button', className, text, disabled = false}: ButtonType) => {
    return (
        <button
            type={type}
            className={className}
            disabled={disabled}
        >
            { text }
        </button>
    )
}

export default Button