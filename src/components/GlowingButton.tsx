"use client"

export const GlowingButton = ({children}:any) => {
    return (
      <div className="h-12 w-36 bg-black flex justify-center items-center" onClick={children.onClick}>
      <div className="absolute inline-flex group">
          <div
              className="absolute transition-all duration-1000 opacity-70 -inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
          </div>
          <a href="#" title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button">{children}
          </a>
      </div>
  </div>
  
    )
  }
  