import axios from 'axios'
import {useState} from "react";
import AdminAuth from '../hooks/AdminAuth'

export default function LoginForm() {
  const { setAdmin,} = AdminAuth()
  const [input, setInput] = useState({
    name : '', 
    password : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      const rs = await axios.post('http://localhost:8889/auth/login', input)
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      
      const rs1 = await axios.get('http://localhost:8889/auth/admin', {
        headers : { Authorization : `Bearer ${rs.data.token}` }
      })
      console.log(rs1.data)
      setUser(rs1.data)

      
    }catch(err) {
      console.log( err.message)
    }
  }

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={hdlSubmit} >
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input 
              type="name" 
              placeholder="username" 
              className="input input-bordered" 
              name="name"
              value={input.name}
              onChange={ hdlChange }
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
              type="password" 
              placeholder="password" 
              className="input input-bordered" 
              name='password'
              value={ input.password}
              onChange={hdlChange}
               />
            </div>
            <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      );
    }
