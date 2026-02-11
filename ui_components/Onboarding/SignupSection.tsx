import React from 'react'

interface ISignupSection{
   setOnboardingView: (view: string) => void

}

    const SignupSection=({setOnboardingView}:ISignupSection)=>{
  return(
    <div className="w-full flex flex-col gap-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-white">
          SignUp to your account
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Enter your email below to login to your account
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="email"
            placeholder="m@example.com"
            className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-sm">
            <label className="text-gray-400">Password</label>
            <button
              type="button"
              
              className="text-gray-400 hover:text-white"
            >
              Forgot your password?
            </button>
          </div>

          <input
            type="password"
            placeholder="enter your password"
            className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="mt-2 bg-bg-primary text-white py-2 rounded-lg font-medium"
        >
          SignUp
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-2">
        <div className="h-px bg-gray-800 flex-1" />
        <span className="text-gray-500 text-sm">Or continue with</span>
        <div className="h-px bg-gray-800 flex-1" />
      </div>

      {/* GitHub Login */}
      <button
        
        className="flex items-center justify-center gap-2 border border-gray-700 py-2 rounded-lg hover:bg-gray-900 transition text-white"
      >
      
        Login with Google
      </button>

      {/* Signup link */}
      <p className="text-center text-sm text-gray-400">
        Don’t have an account?{" "}
        <button className="text-white underline"onClick={() => setOnboardingView('login')}>
          Sign up
        </button>
      </p>
    </div>

  );
}



export default SignupSection
