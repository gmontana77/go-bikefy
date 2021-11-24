import React from 'react'
import { Row, Col, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../redux/actions/userActions'
import Spinner from '../components/Spinner'

function Login() {
    const dispatch = useDispatch()
    const { loading } = useSelector(state=>state.alertsReducers)
    function onFinish(values) {
        dispatch(userLogin(values))
        console.log(values)

    }

    return (
       
            <div className='login'>
                {loading && (<Spinner />)}
                <Row gutter={16} className='d-flex align-item-center'>
                <Col lg={16} style={{position: 'relative'}}>
                    <img src='https://i.ibb.co/16HKc6n/bg.png' className='w-100' /> 
                    
                    <h1 className="loginLogo">Go-Bikefy</h1>
                
                    </Col> 
                    <Col lg={8} className='text-left p-5'>
                        <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>

                            <h1>Login</h1>
                            <hr />
                            <Form.Item name='username' label='Username' rules={[{required:true}]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name='password' label='Password' rules={[{required:true}]}>
                                <Input />
                            </Form.Item>

                            <button className="btn1 mt-2 mb-3">Sign in</button>
                            <br />    
                            <Link to='/register'>Click here to Register</Link>

                        </Form>
                    </Col>   
                </Row>

            </div>
     
    ) 
}

export default Login