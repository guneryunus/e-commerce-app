import { CardContextProvider } from "@/hooks/useCard"

const CardProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <CardContextProvider>{children}</CardContextProvider>
  )
}

export default CardProvider