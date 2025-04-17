import React, { useState } from 'react';

const AuthModal = ({ show, onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 text-xl">×</button>
        <h2 className="text-xl font-bold mb-4 text-center">
          {isSignup ? "Sign Up" : "Sign In"}
        </h2>

        <form className="space-y-4">
          {isSignup && <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded" />}
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded" />
          {isSignup && <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border rounded" />}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}
          <button className="text-blue-600 ml-1" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
