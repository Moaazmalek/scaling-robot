'use client'
import React from 'react'
import './globals.css'
import CustomAccordion from './shadcn/CustomAccordion'
import CustomAlert from './shadcn/CustomAlert'
import { useSearchParams } from 'next/navigation'
import CustomAlertDialog from './shadcn/CustomAlertDialog'
import {AlertCircle,Bell,AlertTriangle} from 'lucide-react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
const Page = () => {
  const params=useSearchParams()
 const balance=parseFloat(params.get("balance") || "0")
  return (
    <div className='w-[200px]'>
      <CustomAccordion/>
      { balance ===0 &&(
         <CustomAlert balance={balance} /> 
      )
      }
      <CustomAlertDialog
      trigger={<AlertCircle/>}
      title='Orbit UI'
      content={<CustomAccordion/>}/>
      
      <CustomAlertDialog
      trigger={<AlertCircle/>}
      title='Orbit UI'
      content={<CustomAlert/>}/>
  <AspectRatio ratio={3/2}>
    <Image fill src="/universe.jpg" alt="Image" className='object-cover'/>
    </AspectRatio>
      
    </div>
  )
}

export default Page