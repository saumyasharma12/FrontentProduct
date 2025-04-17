import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`https://vercel-backend-psi-lilac.vercel.app/`, { email, password })
      localStorage.setItem('token', res.data.token)
      alert('Login successful!')
      navigate('/')
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.message || err.message))
    }
  }

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required />
          <button type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
            Login
          </button>
          <p className="text-center text-sm">
            Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
    
  )
}

export default Login
