import { IconType } from "react-icons"

interface ButtonProps {
    text: string,
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void,
    small?: boolean,
    outline?: boolean,
    disabled?: boolean,
    icon?:IconType,
    color:Boolean,
}

const Button = ({text, onClick, small, outline, disabled,icon:Icon}) => {
  return (
    <button disabled={disabled} className={`rounded-lg p-3 ${small ? "w-[250px]" :"w-full"}  ${outline ? "border text-black" :` bg-black text-white`}`} onClick={onClick}>
     {Icon && <Icon/>}
     {text}
    </button>
  )
}

export default Button