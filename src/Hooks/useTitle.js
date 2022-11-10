import { useEffect } from "react"

const useTitle = title => {
  useEffect( () => {
    document.title =`${title} - Tu Psicoterapeuta`;
  }, [title])
}

export default useTitle;