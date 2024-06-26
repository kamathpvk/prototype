import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
        <form method='PIST' action='https://getform.io/f/01696395-469b-4f94-b916-a1387fa28e7e' className='flex flex-col max-w-[600px] w-full'>
            <div className=' pb-8 '>
                <p className=' text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Let's Connect</p>
                <p className=' text-gray-300 py-4 '>Submit the form below or shoot me an email at email@gmail.com</p>
            </div>
            <input className=' bg-[#ccd6f6] p-2 ' type='text' placeholder='Name' name='name'/>
            <input className=' my-4 p-2 bg-[#ccd6f6] ' type='email' placeholder='email@gmail.com' name='email'/>
            <textarea className=' bg-[#ccd6f6] p-2 ' name='message' rows='5' placeholder='message'></textarea>
            <button disabled className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-4 mx-auto flex items-center '>Lets colab (submission disabled)</button>
        </form>
    </div> 
  )
}

export default Contact
