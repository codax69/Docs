import React from 'react'
import Card from '../Component/Card'


const ForGround = () => {
  const data = [
    {
      desc:"Go to the website where the file is located.",
      fileSize: "0.5MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "",
        tagColor:"green" 
      }
    },
    {
      desc:"Go to the website where the file is located.",
      fileSize: "0.5MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "",
        tagColor:"green" 
      }
    },{
      desc:"Go to the website where the file is located.",
      fileSize: "0.5MB",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "",
        tagColor:"green" 
      }
    }
  ]

  return (
    <div className='absolute w-full h-screen bg-sky-300/10 z-10 pt-12 '>
      <span className='flex gap-3'><Card />
      {data.map((item, index) => (
  <Card key={index} {...item} />
))}

      </span>
    </div>
  )
}

export default ForGround
