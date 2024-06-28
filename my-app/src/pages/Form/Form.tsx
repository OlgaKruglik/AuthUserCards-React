import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../stor/slise/userSlice';
import { useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../../stor/stor';
import { ReactComponent as EyeIcon } from './image/Eye Off.svg';
import './form.css'

interface FormErrors {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    }

function Form() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    

    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [authSuccess, setAuthSuccess] = useState(false);
    const dispatch: AppDispatch = useDispatch();

    const navigate = useNavigate();

    const handleAuthSuccess = () => {
        setAuthSuccess(true);
        setTimeout(() => {
        navigate('/');
        }, 2000);
        }; 

    const validateInput = () => {
        let tempErrors: FormErrors = {};
        if (formData.password !== formData.confirmPassword) {
        tempErrors.confirmPassword = 'Пароли не совпадают';
        }
        setErrors(tempErrors);
        };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateInput(); 
        if (Object.keys(errors).length === 0 && formData.password === formData.confirmPassword) {
            dispatch(register({ email: formData.email, password: formData.password }))
            .unwrap()
            .then((userData) => {
                handleAuthSuccess();
            })
            .catch((error) => {
                console.error('Ошибка регистрации:', error);
            });
        } else {
            console.error('Ошибка в форме');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword); 

    };
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return (
        <div className='SingUp'>
            <div className='form-style'>
            <form onSubmit={handleSubmit}>
                <h2>Регистрация</h2>
                <div className='form-registr'>
                    <label htmlFor="username">Имя</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder='Артур'
                    />
                </div>
                <div className='form-registr'>
                    <label htmlFor="email">Электронная почта</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='example@mail.com'
                    />
                </div>
                <div className='form-registr'>
                    <label htmlFor="email">Пароль</label>
                    <div className='form-registr-password' >
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='121.12'
                        />
                        <button type="button" 
                            onClick={toggleShowPassword}
                            className="icon-form">
                                <EyeIcon className='icon-form'/>
                        </button>
                    </div>
                </div>
                <div className='form-registr'>
                    <label htmlFor="confirmPassword">Подтвердите пароль:</label>
                    <div className='form-registr-password' >
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder='Повторите пароль'
                        className={errors.confirmPassword ? 'error-input' : ''}
                    />
                        <button type="button" 
                            onClick={toggleShowConfirmPassword}
                            className="icon-form">
                                <EyeIcon className='icon-form'/>
                        </button>
                    </div>
                    {errors.confirmPassword && <div className='error-text'>{errors.confirmPassword}</div>}
                </div>
                <button type="submit" className='form-button'>Зарегистрироваться</button>
            </form>
            </div>
        </div>
    )
}

export default Form

