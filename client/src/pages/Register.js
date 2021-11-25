import React from 'react'
import { Row, Col, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../redux/actions/userActions'
import Spinner from '../components/Spinner'

function Register() {
    const dispatch = useDispatch()
    const { loading } = useSelector(state=>state.alertsReducer)
    function onFinish(values) {
        dispatch(userRegister(values))
        console.log(values)

    }
    return (
       
            <div className='login'>
                {loading && (<Spinner />)}
                <Row gutter={16} className='d-flex align-item-center'>
                <Col lg={16} style={{position: 'relative'}}>
                    <img src='https://i.ibb.co/16HKc6n/bg.png' className='w-100' alt='bg' /> 
                    
                    <h1 className="loginLogo">Go-Bikefy</h1>
                    </Col> 
                    <Col lg={8} className='text-left p-5'>
                        <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>

                            <h1>Register</h1>
                            <hr />
                            <Form.Item name='username' label='Username' rules={[{required:true}]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name='password' label='Password' rules={[{required:true}]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name='cpassword' label='Confirm Password' rules={[{required:true}]}>
                                <Input />
                            </Form.Item>

                            <button className="btn1 mt-2 mb-3">Sign up</button>
                            <br />    
                            <Link to='/login'>Click here to login</Link>

                        </Form>
                    </Col>   
                </Row>

            </div>
     
    ) 
}

export default Register