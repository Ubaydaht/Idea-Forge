import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const SignIn = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    const signIn = (e) => {
        e.preventDefault()

        const credentials = {email, password}

        axios.post('http://localhost:2131/login', credentials)
            .then(response => {
                if (response.data.message === 'Login Successful'){ 
                alert('Login successful')
                // console.log(response.data.firstName)
                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.token = response.data.user.token
                navigate('/dashhboard')
                }else {
                    alert(response.data.message || "Invalid credentials");
                }

            })
            .catch(error => {
                console.error('Error submitting form:', error)
                alert("Login failed. Please check your email or password.");
            })
    }



  return (
    <StyledContainer>
      <LeftSection>
        <LogoBrand>IdeaForge</LogoBrand>
        <Description>
          Welcome back to your creative hub. Sign in to continue collaborating, sharing ideas, and building your vision with our community.
        </Description>
  
      </LeftSection>
      <StyledWrapper>
        <div className='sign'>
          <div className="SignIn">
            <div className="title">Welcome Back</div>
            <div className="subtitle">Sign in to your account</div>
            <div className="input-container ic1">
              <input placeholder='Email' type="email" className="input" id="email"  
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="cut" />
            </div>
            <div className="input-container ic2">
              <input placeholder='Password' type="password" className="input" id="password"  
                onChange={(e) => setPassword(e.target.value)}
               />
              <div className="cut cut-short" />
            </div>
            <button className="submit" type="button"  onClick={(e) => {signIn(e)}}>Sign In</button>
            <div className="signup-link">
              Don't have an account? <Link to='/signup'>Sign up</Link>
            </div>
          </div>
        </div>
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
  padding: 40px 20px;
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
  }
  
  .SignIn {
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

  .signup-link {
    text-align: center;
    color: #aaa;
    font-size: 14px;
    margin-top: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
    a {
      color: #08d;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
      
      &:hover {
        color: #0aa;
      }
    }
  }
`;

export default SignIn;
