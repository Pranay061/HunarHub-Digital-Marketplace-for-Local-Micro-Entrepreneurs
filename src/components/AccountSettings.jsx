import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

function AccountSettings() {

  const { user } = useContext(AuthContext)

  const [firstName, setFirstName] = useState(
    user?.firstName || ""
  )

  const [lastName, setLastName] = useState(
    user?.lastName || ""
  )

  const [password, setPassword] = useState("")

  const handleSaveProfile = () => {

    if (!firstName || !lastName) {

      alert("Please fill all fields")

      return
    }

    const updatedUser = {
      ...user,
      firstName,
      lastName,
    }

    localStorage.setItem(
      "hunarhub-user",
      JSON.stringify(updatedUser)
    )

    alert("Profile Updated Successfully ✅")

    window.location.reload()
  }

  const handleChangePassword = () => {

    if (password.length < 6) {

      alert(
        "Password must contain at least 6 characters"
      )

      return
    }

    const updatedUser = {
      ...user,
      password,
    }

    localStorage.setItem(
      "hunarhub-user",
      JSON.stringify(updatedUser)
    )

    alert("Password Updated Successfully ✅")

    setPassword("")
  }

  return (

    <section
      id="account-settings"
      className="py-24 px-6 bg-[#fffaf5]"
    >

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Account Settings
        </h1>

        {/* Profile Card */}
        <div className="bg-white p-8 rounded-3xl shadow mb-8">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-2xl font-bold text-orange-600">

              {firstName?.charAt(0)?.toUpperCase()}

            </div>

            <div>

              <h2 className="text-2xl font-bold">
                {firstName} {lastName}
              </h2>

              <p className="text-gray-500">
                {user?.email}
              </p>

            </div>

          </div>

          <h2 className="text-2xl font-bold mb-6">
            Profile Information
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
              className="w-full p-4 border rounded-2xl"
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
              className="w-full p-4 border rounded-2xl"
            />

            <input
              type="email"
              value={user?.email}
              readOnly
              className="w-full p-4 border rounded-2xl bg-gray-100"
            />

            <button
              onClick={handleSaveProfile}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-2xl"
            >
              Save Changes
            </button>

          </div>

        </div>

        {/* Password Card */}
        <div className="bg-white p-8 rounded-3xl shadow">

          <h2 className="text-2xl font-bold mb-6">
            Change Password
          </h2>

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 border rounded-2xl mb-4"
          />

          <button
            onClick={handleChangePassword}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-2xl"
          >
            Update Password
          </button>

        </div>

      </div>

    </section>
  )
}

export default AccountSettings