import { createContext, useState } from "react"

export const AuthContext = createContext()

function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {

    const savedUser = localStorage.getItem("hunarhub-user")

    return savedUser
      ? JSON.parse(savedUser)
      : null

  })

  const signup = (firstName, lastName, email, password) => {

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    }

    localStorage.setItem(
      "hunarhub-user",
      JSON.stringify(newUser)
    )

    setUser(newUser)
  }

  const login = (email, password) => {

    const savedUser = JSON.parse(
      localStorage.getItem("hunarhub-user")
    )

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {

      setUser(savedUser)

      localStorage.setItem(
        "hunarhub-user",
        JSON.stringify(savedUser)
      )

      return true
    }

    return false
  }

  const logout = () => {

    setUser(null)

    localStorage.removeItem("hunarhub-user")
  }

  return (

    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  )
}

export default AuthProvider