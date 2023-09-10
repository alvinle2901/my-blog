import React, { useState } from 'react'

const Subscription = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const Subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error, message } = await res.json()
    if (error) {
      setError(error)
    } else {
      setSuccess(message)
    }
  }

  const changeEmail = (event) => {
    const email = event.target.value
    setEmail(email)
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="md:text-xl text-base mb-4 font-semibold border-b pb-4">
        nhận thông báo bài viết mới
      </h3>
      <div className="flex flex-wrap" onSubmit={Subscribe}>
        <form className="relative">
          <input
            aria-label="Email for newsletter"
            placeholder="Enter your email address"
            type="email"
            autoComplete="email"
            required
            onChange={changeEmail}
            className="py-3 px-0 text-md bg-transparent w-10/12 text-gray-900 border-b-2 border-gray-400 dark:border-gray-400 dark:text-white focus:border-brand focus-visible:outline-none"
          />
          <button
            className="transition duration-500 mt-5 transform hover:-translate-y-1 inline-block bg-pink-500 text-md font-medium rounded-full text-white px-4 py-3 cursor-pointer"
            type="submit"
          >
            Subscribe
          </button>
          {success
            ?
            <span className="text-md float-left relative font-medium mt-5 text-green-300">
              Email Submitted! You will receive an email in your inbox.
            </span>
            :
            <span className="text-md float-left relative font-medium mt-5 text-red-800">
              {error}
            </span>
          }
        </form>
      </div>
    </div >
  )
}

export default Subscription