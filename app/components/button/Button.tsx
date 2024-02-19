type ButtonType = {
    type: 'button' | 'submit'
    text: string,
    className?: string,
    disabled?: boolean,
}

const Button = ({ type = 'button', className, text, disabled = false}: ButtonType) => {
    const classNames = className + " drop-shadow-sm p-3"

    return (
        <button
            type={type}
            className={classNames}
            disabled={disabled}
        >
            { text }
        </button>
    )
}

export default Button