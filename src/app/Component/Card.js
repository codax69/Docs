import { motion } from 'framer-motion';
import React from 'react'
import { FaFile } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const Card = ({data}) => {
  return (
    <motion.div drag whileDrag={{ scale: 1.2 }} dragConstraints={{ left: 0, right: 300 }} dragElastic={0.2}  dragMomentum={false}  onDragEnd={
      (event, info) => console.log(info.point.x, info.point.y)} className="card relative h-64 p-[1.265rem] w-[13rem] rounded-3xl first-letter: bg-zinc-500 overflow-hidden">
    {/* file desc mb icon prog   */}
    <FaFile/>
    <h3 className='font-semibold text-white text-base pt-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
    <span className=' absolute flex w-[10rem] justify-between bottom-8'><h4 className=''>0.8mb</h4>
    <IoClose/></span>
    <div className="prog absolute w-[13rem] left-0 h-8 bg-green-600 bottom-0"></div>
    </motion.div>

  )
}

export default Card
