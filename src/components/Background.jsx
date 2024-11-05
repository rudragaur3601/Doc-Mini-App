import React from 'react'

function Background() {
  return (
    <>
    <div className="fixed z-[2] w-full h-screen">
    <div className=" w-full py-10 flex justify-center text-white font-semibold text-2xl">
        Documents.
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter font-semibold text-white">
        Docs.
      </h1>

    </div>
      
    </>
  )
}

export default Background
