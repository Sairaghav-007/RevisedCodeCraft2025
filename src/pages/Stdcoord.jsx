import React from 'react'
import Std from '../components/Std'

export const Stdcoord = () => {
  return (
    <div className='text-white pt-32' id="contact">
        <h1 className=' text-4xl md:text-6xl text-center font-semibold'>Student Co-Ordinator</h1>
        <div className='md:flex md:justify-center  text-center pt-5 gap-16 '>
            <div>
                <Std 
                name="Aldous Roy" 
                email="sec21cj0xx@sairamtap.edu.in"
                no="+91 90032 68427"
                />
            </div>
            <br />
            <div>
                <Std 
                name="Kamalesh Kumar Saravanan" 
                email="sec21cj0xx@sairamtap.edu.in"
                no="+91 70014 00312"
                />
            </div>
            <br />
            <div>
                <Std 
                name="Yogesh M" 
                email="sec21cj0xx@sairamtap.edu.in"
                no="+91 xxxxx xxxxx"
                />
            </div>
            <br />
            <div>
                <Std 
                name="xxxxxx" 
                email="sec21cj0xx@sairamtap.edu.in"
                no="+91 xxxxx xxxxx"
                />
            </div>
        </div>
    </div>
  )
}
