import React from 'react'

export const Maps = () => {
  return (
    <div className="grid place-items-center pt-24">
        <p className="text-6xl font-semibold text-white m-2">Our Location</p>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.181780188787!2d80.0574071!3d12.9602171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1722864442412!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full sm:w-4/5 h-96 rounded-2xl p-2"
        ></iframe>
    </div>
  )
}
