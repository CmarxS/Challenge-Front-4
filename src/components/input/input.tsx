import './input.scss'

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    pattern?: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({type, name, placeholder, pattern, value, onChange }: InputProps) => {
    return (
            <input type={type} name={name} placeholder={placeholder} required pattern={pattern} value={value} onChange={onChange} />
    );
}

export default Input;