import React, { createContext, useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Image, Form, Input, Typography, Button, message, Checkbox } from 'antd'
import axios from 'axios'
import { TokenContext } from '../../Components/TokenProvider'




const Login = () => {

    const { setToken } = useContext(TokenContext);
    const [info, setInfo] = useState(null)

    const navigate = useNavigate()


    const submitValidation = (values) => {

        axios.post('http://localhost:5000' + '/auth/login', values) //link where we POST detail
            .then(res => {
                console.log(res.data)
                message.success("Login Successfully")
                setToken(res.data)
                navigate('/')

            }).catch(error => { message.error(error.response.data.message) })


    }

    return (

        <>
            <div className="LoginHeader">
                <Image                   
                    width={'3%'}
                    src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
                ></Image>
                <Typography.Title style={{paddingLeft: '10%'}}>Nazimabad Residential Visiting Management System</Typography.Title>
            </div>

            <div className='LoginBody'>
                <Form onFinish={submitValidation} className='Form'>

                    <Typography.Title>Login</Typography.Title>
                    <Form.Item rules={[{
                        required: true,
                        type: 'email',
                        message: 'Enter a Valid Email Address'

                    }]} label="Email" name={"email"}>
                        <Input />
                    </Form.Item>

                    <Form.Item rules={[{
                        required: true,
                        message: 'Enter Your Password'

                    }]} label="Password" name={"password"}>
                        <Input.Password />
                    </Form.Item>



                    <div className="flex justify-between justify-items-center">
                        <Form.Item
                            name="remember"
                            valuePropName="checked"

                        >
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Link to="/forgotPwd" className="text-sm text-rose-700 pt-1  ">
                            {" "}
                            Forgot Your Password?{" "}
                        </Link>
                    </div>


                    <Button type="primary" htmlType="submit" block>Login</Button>

                </Form>
            </div>
        </>

    )


}

export default Login;
