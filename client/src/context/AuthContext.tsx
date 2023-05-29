import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { ReactNode, createContext, useContext } from "react"
type AuthContext = {}

const Context = createContext<AuthContext | null>(null)

export function useAuth() {
  return useContext(Context)
}
type AuthProviderProps = {
  children: ReactNode
}

type user = {
  id: string
  name: string
  image?: string
}

export function AuthProvider({ children }: AuthProviderProps) {
  const signup = useMutation({
    mutationFn: (user: user) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user)
    },
  })
  return <Context.Provider value={{}}>{children}</Context.Provider>
}
