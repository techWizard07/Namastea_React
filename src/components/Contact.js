import React from 'react'

const Contact = () => {
  return (
    <div> 
      <h1 className="font-bold text-3xl p-4 m-4"> Contact Us</h1>
      <form action="" className="">
        <input type="text" className="border m-2 border-black p-2" placeholder="Enter Your Name" />
        <input type="text" className="border m-2 border-black p-2" placeholder="Enter Your Message!" />
        <button className="border-black p-2 bg-black text-white rounded-2xl">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact