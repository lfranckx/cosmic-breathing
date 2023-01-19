import React, { useState } from 'react';
import '../styles/Connect.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

const Connect = () => {
    const [buttonState, handleButtonState] = useState('Send');
    const [buttonDisabled, handleButtonDisabled] = useState(false);
    const [message, handleMessage] = useState('');
    
    const submitForm = (values) => {

    }

    return (
    <>
        <div className='page_width'>
            <main id='connect'>
                <section className='content'>
                    <h2 className='h1'>Connect</h2>
                    
                    <div className='form-wrap'>
                        <Formik id='contact-form'> 
                            <fieldset className='fieldset'>
                                <div className='flex'>
                                    <div className='field_wrap'>
                                        <div className='flex column-reverse'>
                                            <label htmlFor="first_name" id='first_name'>
                                                First
                                            </label>
                                            <Field
                                                name="first_name"
                                            />
                                        </div>
                                        <ErrorMessage component="div" className='error' name='first_name' />
                                    </div>

                                    <div className='field_wrap'>
                                        <div className='flex column-reverse'>
                                            <label htmlFor="last_name" id='last_name'>
                                                Last
                                            </label>
                                            <Field
                                                name="last_name"
                                            />
                                        </div>
                                        <ErrorMessage component="div" className='error' name='last_name' />
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='field_wrap'>
                                        <div className='flex column-reverse'>
                                            <label htmlFor="email" id='email'>
                                                Email
                                            </label>
                                            <Field
                                                name="email"
                                            />
                                        </div>
                                        <ErrorMessage component="div" className='error' name='email' />
                                    </div>

                                    <div className='field_wrap'>
                                        <div className='flex column-reverse'>
                                            <label htmlFor="tel" id='tel'>
                                                Tel
                                            </label>
                                            <Field
                                                name="tel"
                                            />
                                        </div>
                                        <ErrorMessage component="div" className='error' name='tel' />
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='field_wrap'>
                                        <div className='flex column-reverse'>
                                            <label htmlFor="question_1" id='question_1'>
                                                How did you find me?
                                            </label>
                                            <Field
                                                name='question_1'
                                                as='select'
                                            >
                                                <option value=''>Select an Option</option>
                                                <option value='Google'>Google</option>
                                                <option value='Instagram'>Instagram</option>
                                                <option value='Referred by a friend'>Referred by a friend</option>
                                                <option value='Other'>Other</option>
                                            </Field>
                                        </div>
                                        <ErrorMessage component="div" className='error' name='question_1' />
                                    </div>

                                    <div className='field_wrap'>
                                        <div className='flex column-reverse'>
                                            <label htmlFor="question_2" id='question_2'>
                                                Which service are you interested in?
                                            </label>
                                            <Field
                                                name='question_2'
                                                as='select'
                                            >
                                                <option value=''>Select an Option</option>
                                                <option value='Meditation Initiation'>Meditation Initiation</option>
                                                <option value='Sadhana Development'>Sadhana Development</option>
                                                <option value='Himalayan Integrated Practice'>Himalayan Integrated Practice</option>
                                            </Field>
                                        </div>
                                        <ErrorMessage component="div" className='error' name='question_2' />
                                    </div>

                                    <div className='field_wrap'>
                                        <div className='flex column-reverse'>
                                            <label htmlFor="message" id='message'>
                                                How else can I help you?
                                            </label>
                                            <Field
                                                name='message'
                                                placeholder='message'
                                            />
                                        </div>
                                        <ErrorMessage component="div" className='error' name='question_2' />
                                    </div>
                                </div>
                            </fieldset>

                            <div className='btn-wrap'>
                                <button className="btn" type="submit" disabled={buttonDisabled}>
                                    {buttonState}
                                </button>
                            </div>
                        </Formik>
                    </div>
                </section>
            </main>
        </div>
    </>
    );
}

export default Connect;