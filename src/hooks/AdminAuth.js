import {useContext} from 'react'
import AuthContext2 from '../contexts/AuthContext2'


export default function AdminAuth() {
  return useContext(AuthContext2)
}