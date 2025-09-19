import React, { useContext } from 'react'
import Container from './Container'

const Post = ({allpage, filtercate}) => {

   

  return (
    <>
        <section>
            <Container>
                <div className="flex flex-wrap gap-2 mt-[50px]">
                    {filtercate.length > 0 ? filtercate.map((item)=>(
                        <div className="w-[24%]">
                            <img src={item.image_path} alt="" />
                        </div>
                    )):
                    allpage.map((item)=>(
                        <div className="w-[24%]">
                            <img src={item.image_path} alt="" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    </>
  )
}

export default Post