import axios from 'axios'
import {useState} from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username : '', 
    password : '',
    confirmPassword : '',
    email : '',
    phon : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      if(input.password !== input.confirmPassword) {
        return alert('Please check confirm password')
      }
      const rs = await axios.post('http://localhost:8889/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
      }
    }catch(err) {
      console.log( err.message)
    }

  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded p-8">
        <div className='text-3xl mb-4 text-center'>Register Form</div>
        <form className="mb-4" onSubmit={hdlSubmit}>
          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input 
            type="text" 
            placeholder="Username" 
            className="input input-bordered w-full max-w-xs"
            name="username"
            value={input.username}
            onChange={ hdlChange }
             />
          </label>

          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input 
            type="email" 
            placeholder="Email" 
            className="input input-bordered w-full max-w-xs"
            name='email'
            value={input.email}
            onChange={hdlChange} 
            />
          </label>

          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Phon</span>
            </div>
            <input 
            type="phon" 
            placeholder="phon" 
            className="input input-bordered w-full max-w-xs"
            name='phon'
            value={input.phon}
            onChange={hdlChange} 
            />
          </label>


          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input 
            type="password" 
            placeholder="Password" 
            className="input input-bordered w-full max-w-xs" 
            name='password'
            value={ input.password}
            onChange={hdlChange}
            />
          </label>

          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Confirm password</span>
            </div>
            <input 
            type="confirmpassword" 
            placeholder="Conirm password" 
            className="input input-bordered w-full max-w-xs"
            name='confirmPassword'
            value={input.confirmPassword}
            onChange={hdlChange} 
            />
          </label>

          

          <button type="submit" className="btn btn-primary w-full">Submit</button>
        </form>
      </div>
    </div>
  );
}