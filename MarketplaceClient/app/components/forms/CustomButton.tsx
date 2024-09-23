interface CustomButtonProps{
    label:string
    onClick:() => void
    className?: string
}

const CustomButton:React.FC<CustomButtonProps> = ({label,onClick,className}) => {
    return (
        <div
        onClick={onClick} 
        className={`py-4 text-center bg-marketplace hover:bg-marketplace-dark text-white rounded-xl transition cursor-pointer ${className}`}>
            {label}
        </div>
    )
}

export default CustomButton