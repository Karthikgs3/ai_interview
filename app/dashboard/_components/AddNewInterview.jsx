"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function AddNewInterview() {
    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [jobExperience, setJobExperience] = useState();

    const onSubmit =  (e) => {
        e.preventDefault()
        console.log(jobPosition, jobDesc, jobExperience)
        
       
        // setOpenDialog(false);
    }
    return (
    <div>
       <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
            onClick={() => setOpenDialog(true)}>
         <h2 className='font-bold text-lg text-center'>+ Add New</h2>
       </div>
       <Dialog open={openDialog}>
  
  <DialogContent className="max-w-2xl">
    <DialogHeader>
      <DialogTitle className="text-2xl">Tell us more about your job interview</DialogTitle>
      <DialogDescription>
        <form onSubmit={onSubmit}>
       <div>
        <h2>Add details about your job description</h2>

        <div className='mt-7 my-3'>
            <label >Job Role/Position</label>
           <Input type="text" placeholder="e.g. Software Engineer, Product Manager" className="my-2" required
           onChange={(e) => setJobPosition(e.target.value)}
           
           />
        </div>

        <div className='mt-7 my-3'>
            <label >Job Description/ Tech Stack</label>
           <Textarea placeholder="e.g. MERN, MEAN, Java Full Stack" className="my-2" required 
           onChange={(e) => setJobDesc(e.target.value)}/>
        </div>

        <div className='mt-7 my-3'>
            <label >Years of Experience</label>
           <Input type="number" placeholder="e.g. 5" className="my-2" min="0" max="40" required 
           onChange={(e) => setJobExperience(e.target.value)}/>
        </div>

       </div>

        <div className='flex gap-5 justify-end'>
            <Button type="button" variant="ghost" onClick={()=> setOpenDialog(false)} className="cursor-pointer">Cancel</Button>
            <Button type="submit" className="cursor-pointer">Start Interview</Button>
        </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default AddNewInterview
