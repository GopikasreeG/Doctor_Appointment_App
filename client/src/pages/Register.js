import React from 'react';
import { Button,Form,Input } from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
        dispatch(showLoading());
        const response = await axios.post('/api/user/register', values);
        dispatch(hideLoading());
        if (response.data.success) {
            toast.success(response.data.message);
            toast("Redirecting to Login page");
            navigate("/login");
        } else {
            toast.error(response.data.message);
        }
    } catch (error) {  // Add error parameter here
      dispatch(hideLoading());
        console.error(error);
        toast.error("Something went wrong");
    }
};

return (
    <div className="authentication">
      <div className="authentication-form card p-2">
        <h3 className='card-title'>REGISTER PAGE</h3>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Name' name='name'>
               <Input placeholder='Name' />
          </Form.Item>
          <Form.Item label='Email' name='email'>
               <Input placeholder='Email' />
          </Form.Item>
          <Form.Item label='Password' name='password'>
               <Input placeholder='Password' type='password'/>
          </Form.Item>
          <Button className='primary-button my-2' htmlType='submit'>REGISTER</Button>
          <Link to='/login' className='anchor mt-2'>Click Here to Login</Link>
        </Form>
      </div>
    </div>
  )
}

export default Register;