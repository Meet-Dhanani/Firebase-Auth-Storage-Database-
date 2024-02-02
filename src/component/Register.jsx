import React, { useEffect } from 'react'
import { useState } from 'react';
import '../App.css';
import user from './img/user.png'
import { toast } from 'react-toastify';
import { getFireData, postFireData } from './firebase function/function';

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const [gdata, setGdata] = useState([])

    const fetchInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const submit = (e) => {
        e.preventDefault()

        if (!data.name || !data.email || !data.phone) {
            toast.warning("Please fill all field")
        } else {
            postFireData(data)
            setGdata([...gdata, data])
            toast.success("Register Successfully !")

            setData({ name: '', email: '', phone: '' })
        }
    }

    useEffect(() => {
        getFireData().then(res => setGdata(res))
    }, [])

    console.log(gdata);

    return (
        <div classname="App">
            <div className="wrapper">
                <div className="logo">
                    <img src={user} />
                </div>
                <div className="text-center mt-4 name">
                    Register
                </div>
                <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user" />
                        <input type="text" onChange={fetchInput} name="name" value={data.name} placeholder="Your Name" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user" />
                        <input type="email" onChange={fetchInput} name="email" value={data.email} placeholder="Your Email" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key" />
                        <input type="tel" onChange={fetchInput} name="phone" value={data.phone} placeholder="+91 124442424" pattern='[0-9]{10}' />
                    </div>
                    <button className="btn mt-3" onClick={submit}>Submit</button>
                </form>
            </div>
        </div>

    );
}

export default Register