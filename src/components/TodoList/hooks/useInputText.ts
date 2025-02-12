import { useRef } from "react";
function useInputText() {
  const inputRef = useRef<HTMLInputElement>(null)
     const clearInput = () => {
         inputRef.current!.value = ""    
     }
     const getValue = (): string => {
         return inputRef.current?.value || ""
     }
     const isValid = (text: string): boolean => {
         return (text != null && text != undefined) && text.trim().length > 0
     }

        return {
            clearInput,
            getValue,
            isValid,
            inputRef
        }
}

export default useInputText;