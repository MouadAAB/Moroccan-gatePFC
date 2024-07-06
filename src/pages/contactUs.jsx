import React from 'react';

const ContactUs = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#000000]'>
      <div className='bg-white p-8 rounded-lg shadow-xl w-full max-w-xl mt-[calc(var(--navbar-height) + var(--undernav-height))]'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>Contact Us</h1>
        
        <form className='space-y-6'>
          <div>
            <label className='block text-lg font-semibold text-gray-700 mb-2' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your Name'
            />
          </div>

          <div>
            <label className='block text-lg font-semibold text-gray-700 mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your Email'
            />
          </div>

          <div>
            <label className='block text-lg font-semibold text-gray-700 mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              id='message'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your Message'
              rows='5'
            ></textarea>
          </div>

          <div className='text-center'>
            <button
              type='submit'
              className='bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-200'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
