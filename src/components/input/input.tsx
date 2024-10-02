import './input.scss'

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    pattern?: string;
}

const Input = ({type, name, placeholder, pattern }: InputProps) => {
    return (
            <input type={type} name={name} placeholder={placeholder} required pattern={pattern} />
    );
}

export default Input;