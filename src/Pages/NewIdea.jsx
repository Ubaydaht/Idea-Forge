import React from 'react'
import axios from 'axios'
import './NewIdea.css'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import DashboardNav from '../components/DashboardNav';


const NewIdea = () => {

  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"));
  const formik = useFormik({
        initialValues: {
            title: '',
            category: '',
            shortDescription: '',
            fullIdeaDetails: '',
            tag1:'',
            tag2:'',
            requiredRole1:'',
            requiredRole2:'',
            requiredRole3:'',
            requiredRole4:'',
            createdBy: user.id

        },
        onSubmit: (values) => {
            console.log(values)
            alert('Idea published successfully')
            const dataToSend = {
   ...values,
   createdBy: user.id
};
            axios.post('https://forgeidea-vp95.onrender.com/ideas', dataToSend)
                .then(response => {
                    navigate('/dashhboard')
                })
                .catch(error => {
                    console.error('Error submitting idea', error)
                })

                 
        },
        validationSchema: yup.object({
            title: yup.string().required('Title is required'),
            category: yup.string().required('Category is required'),
            shortDescription: yup.string().required('Description is required'),
            fullIdeaDetails: yup.string().required('Full idea details is required'),
            tag1: yup.string().required('tag is required'),
            tag2: yup.string().required('tag isrequired'),
            requiredRole1: yup.string(),
            requiredRole2: yup.string(),
            requiredRole3: yup.string(),
            requiredRole4: yup.string(),
            
        })
    })
 
  return (
    <>
    <DashboardNav/>
       <section className='px-5'>
         <nav className='d-flex justify-content-between align-items-center py-3'>
         <div className='d-flex align-items-center gap-4'>
          <Link to="/dashhboard"> 
          <img src="/cancel.svg" alt="" />
          </Link>
          <span>New Idea</span>
         </div>
        </nav>
        
        <div className='d-flex justify-content-center align-items-center'>
          <form action="" className='d-flex flex-column gap-3 '>
            <h1>Post New Idea</h1>
           {/* <p>Share your idea with your community</p> */}
            <label htmlFor="title">Title:</label>
            <input type="text" className='rounded-3' name="title" onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
  {formik.touched.title ? <p className="text-danger fs-6">{formik.errors.title}</p> : ""}


            
            <label htmlFor="category">Category</label>
            <input type="text" className='rounded-3' name='category' onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
            {formik.touched.category ? <p className="text-danger fs-6">{formik.errors.category}</p> : ""}
              
            <label htmlFor="title">Short Description</label>
            <textarea name="shortDescription" id="" onChange={formik.handleChange}
            onBlur={formik.handleBlur}></textarea>
            {formik.touched.shortDescription ? <p className="text-danger fs-6">{formik.errors.shortDescription}</p> : ""}

            <label htmlFor="">Full Idea Details</label>
            <textarea name="fullIdeaDetails" id="" onChange={formik.handleChange}
            onBlur={formik.handleBlur}></textarea>
            {formik.touched.fullIdeaDetails ? <p className="text-danger fs-6">{formik.errors.fullIdeaDetails}</p> : ""}

            <label htmlFor="title">Tags</label>
           <div className='d-flex gap-4 w-100'>
             <input name='tag1' type="" className='w-100' onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.tags ? <p className="text-danger fs-6">{formik.errors.tag1}</p> : ""}

            <input name='tag2' type="" className='w-100' onChange={formik.handleChange}  />
           </div>
            <label htmlFor="role">Required Role</label>
            <div className='d-flex gap-4 w-100'>
             <input type="" className='w-100' name='requiredRole1' onChange={formik.handleChange}
           />
            <input type="" className='w-100' name='requiredRole2'onChange={formik.handleChange}/>
           </div>
           <div className='d-flex gap-4 w-100'>
             <input type="" className='w-100' name='requiredRole3 ' onChange={formik.handleChange}/>
            <input type="" className='w-100' name='requiredRole4' onChange={formik.handleChange}/>
           </div>
           <button className='btn btn-light text-white rounded-pill' style={{backgroundColor: '#003D9B'}} onClick={formik.handleSubmit}>
           Publish
         </button>
          
        </form>
        </div>
       </section>
    </>
  )
}

export default NewIdea