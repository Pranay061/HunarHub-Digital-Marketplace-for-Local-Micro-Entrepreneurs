import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { toast } from "react-toastify"

function Auth() {

  const [isSignup, setIsSignup] = useState(false)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {
    signup,
    login,
    user,
  } = useContext(AuthContext)

  // Hide auth section after login
  if (user) return null

  const handleSubmit = (e) => {

    e.preventDefault()

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {

      toast.error("Please enter a valid email ❌")
      return
    }

    // Strong Password Validation
    if (password.length < 6) {

      toast.error("Password must contain at least 6 characters ❌")
      return
    }

    if (isSignup) {

      if (!firstName || !lastName) {

        toast.error("Please fill all fields ❌")
        return
      }

      signup(
        firstName,
        lastName,
        email,
        password
      )

      toast.success("Account Created Successfully 🚀")

    } else {

      const success = login(email, password)

      if (success) {

        toast.success("Login Successful 🚀")

      } else {

        toast.error("Invalid Email or Password ❌")
      }
    }
  }

  return (

    <section
      id="login"
      className="py-24 px-6 bg-[#fffaf5]"
    >

      <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-bold text-center">

          {isSignup ? "Create Account" : "Welcome Back"}

        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          {isSignup && (
            <>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-4 rounded-2xl border"
              />

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-4 rounded-2xl border"
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-2xl border"
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl transition"
          >

            {isSignup ? "Create Account" : "Login"}

          </button>

        </form>

        <p className="text-center mt-6">

          {isSignup
            ? "Already have an account?"
            : "New user?"}

          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-orange-600 ml-2 font-semibold"
          >

            {isSignup ? "Login" : "Create Account"}

          </button>

        </p>

      </div>

    </section>
  )
}

export default Auth