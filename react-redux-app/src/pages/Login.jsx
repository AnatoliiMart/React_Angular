import React, { useEffect, useRef } from 'react'
import { Button, Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../thunks/authThunk'
import { useNavigate } from 'react-router-dom'
const Login = () => {
	const auth = useSelector((state) => state.auth)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const emailField = useRef(null)
	useEffect(() => {
		emailField.current.focus()
	}, [])
	useEffect(() => {
		if (auth.token) {
			navigate('/')
		}
	}, [auth])
	const onFinish = (values) => {
		dispatch(login(values))
		navigate('/')
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<div>
			<h1>Login</h1>
			{auth.error?.message}
			<Form
				name='basic'
				labelCol={{
					span: 8
				}}
				wrapperCol={{
					span: 16
				}}
				style={{
					maxWidth: 600
				}}
				initialValues={{
					remember: true
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='Email'
					name='email'
					rules={[
						{
							required: true,
							message: 'Please input your email!'
						}
					]}
				>
					<Input ref={emailField} />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[
						{
							required: true,
							message: 'Please input your password!'
						}
					]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16
					}}
				>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Login
