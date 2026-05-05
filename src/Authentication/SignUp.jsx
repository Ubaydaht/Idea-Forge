import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values)
                    alert('Form submitted successfully')
            axios.post('https://forgeidea-vp95.onrender.com/register', values)
                .then(response => {
                    navigate('/login')
                })
                .catch(error => {
                    console.error('Error submitting form:', error)
                })

                 
        },
        validationSchema: yup.object({
            firstname: yup.string().required('First name is required'),
            lastname: yup.string().required('Last name is required'),
            email: yup.string().email('Invalid email format').required('Email is required'),
            password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        })
    })
    
  return (
    <StyledContainer>
      <LeftSection>
        <LogoBrand>Idea<span style={{color:'blue'}}>Forge</span></LogoBrand>
        <Description>
          Unlock your creative potential and bring your brightest ideas to life. Join our community of innovators and make your vision a reality.
        </Description>

        <i>Already have an account? <Link to="/login">Signin</Link></i>

      </LeftSection>
      <StyledWrapper onSubmit={formik.handleSubmit}>
        <form className='sign' >
          <div className="SignUp">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        <div className="input-container ic1">
          <input placeholder='First name' type="text" className="input" id="firstname" name="firstname" onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

        {formik.touched.firstname ? <p className="text-danger fs-6">{formik.errors.firstname}</p> : ""}

          <div className="cut" />
          {/* <label className="iLabel" htmlFor="firstname">First name</label> */}
        </div>
        <div className="input-container ic2">
          <input placeholder= 'Last name' type="text" className="input" id="lastname" name="lastname" onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

        {formik.touched.lastname ? <p className="text-danger fs-6">{formik.errors.lastname}</p> : ""}

          <div className="cut" />
          {/* <label className="iLabel" htmlFor="lastname">Last name</label> */}
        </div>
        <div className="input-container ic2">
          <input placeholder='Email' type="text" className="input" id="email" name="email" onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
                 {formik.touched.email && formik.errors.email ? <p className="text-danger fs-6">{formik.errors.email}</p> : ""}

          <div className="cut cut-short" />
          {/* <label className="iLabel" htmlFor="email">Email</label> */}
        </div>
        <div className="input-container ic2">
          <input placeholder='Password' type="password" className="input" id="password" name="password" onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
                 {formik.touched.password && formik.errors.password ? <p className="text-danger fs-6">{formik.errors.password}</p> : ""}

        </div>
        <button className="submit" type="submit">Register</button>
      </div>
      </form>
    </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #0f0f1e;
  padding: 5px 20px;
  gap: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    overflow-y: auto;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  color: white;
  max-width: 500px;
  padding: 20px;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const LogoBrand = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 20px 0;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 30px 0;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Feature = styled.p`
  font-size: 16px;
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  padding-left: 10px;
  border-left: 3px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    border-left-color: #fff;
    color: #fff;
    padding-left: 15px;
  }
`;

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  .sign {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    margin-top: 5px;
  }
  
  .SignUp {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 50px 40px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }

  .title {
    color: #eee;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 8px;
    text-align: center;
  }

  .subtitle {
    color: #eee;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 30px;
    text-align: center;
  }

  .input-container {
    height: 45px;
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  }

  .ic1 {
    margin-top: 0;
  }

  .ic2 {
    margin-top: 0;
  }

  .input {
    background-color: #303245;
    border-radius: 12px;
    border: 2px solid #303245;
    box-sizing: border-box;
    color: #eee;
    font-size: 16px;
    height: 100%;
    outline: 0;
    padding: 12px 15px;
    width: 100%;
    transition: all 0.3s ease;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
    &::placeholder {
      color: #65657b;
    }
    
    &:focus {
      background-color: #303245;
      border-color: #08d;
      box-shadow: 0 0 0 3px rgba(0, 136, 221, 0.2);
    }
  }

  .cut {
    background-color: transparent;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transition: all 200ms;
    width: 76px;
    display: none;
  }

  .cut-short {
    width: 50px;
  }

  .iLabel {
    color: #65657b;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transition: all 200ms;
    top: 15px;
  }

  .input:focus ~ .cut {
    transform: translateY(8px);
  }

  .input:focus ~ .iLabel {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input:not(:focus) ~ .iLabel {
    color: #808097;
  }

  .input:focus ~ .iLabel {
    color: #08d;
  }

  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    height: 45px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
    transition: all 0.3s ease;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
    &:hover {
      transform: translateY(-2px);
      background-color: #0aa;
      box-shadow: 0 10px 25px rgba(0, 136, 221, 0.4);
    }
    
    &:active {
      transform: translateY(0);
      background-color: #08d;
      box-shadow: 0 5px 15px rgba(0, 136, 221, 0.3);
    }
  }
  
  a {
    width: 100%;
    text-decoration: none;
    
    .submit {
      width: 100%;
    }
  }
`;

export default SignUp;
