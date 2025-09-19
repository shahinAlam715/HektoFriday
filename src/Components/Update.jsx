import React from 'react'
import Container from './Container'
import update from "../assets/update.png"
import update1 from "../assets/update1.png"

const Update = () => {
  return (
    <>
    <section>
        <div className="my-[64px]">
            <img src={update} alt="" />
        </div>
        <Container>
                <div className="bg-[red] w-full">
                    <img src={update1} alt="" className='w-full'/>
                </div>
        </Container>
    </section>
    </>
  )
}

export default Update