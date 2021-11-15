import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../../component/Input';
import { signin, signup } from '../../actions/auth';


const initialState = { imageProfile: 'default.jpg', userName: '', email: '', password: '', confirmPassword: '' }

export default function Auth() {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } })

            history.push('/Postingan');
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("gagal Google")
    }


    return (
        <>
            <Container className="mt-5 mb-5">
                <h2 className="title mt-5 text-center">{isSignup ? 'Sign Up' : 'Sign In'}</h2>
                <Form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                            <>
                                <Form.Control type="text" name="imageProfile" handleChange={handleChange} hidden />
                                <Input type="text" name="userName" placeholder="Username..." handleChange={handleChange} />
                            </>

                        )
                    }

                    <Input type="email" name="email" placeholder="Email..." handleChange={handleChange} />
                    <Input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password..." handleShowPassword={handleShowPassword} handleChange={handleChange} />
                    {isSignup && <Input type="password" name="confirmPassword" placeholder="Repeat Password..." handleChange={handleChange} />}

                    <div className="d-grid gap-2">
                        <Button variant="dark" type="submit" className="justify-center">
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>

                        <Button onClick={switchMode} size="sm" variant="link">
                            {isSignup ? 'Already have an account? Sign In' : 'Don`t have an account? Sign Up'}
                        </Button>

                        <GoogleLogin
                            clientId="577047285395-5aj9l8r94takp2hrs0edi38uaktpm0i0.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button variant="dark" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                    </div>




                </Form>
            </Container>
        </>
    )
}
