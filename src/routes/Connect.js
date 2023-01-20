import React, { useEffect, useState } from 'react';
import '../styles/Connect.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

const Connect = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [buttonState, handleButtonState] = useState('Send');
    const [buttonDisabled, handleButtonDisabled] = useState(false);
    const [message, handleMessage] = useState('');

    const submitForm = (values) => {
        handleButtonState("Sending");
        const newValues = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            tel:  values.tel,
            question_1: values.question_1,
            question_2: values.question_2,
            message: values.message
        }

        console.log(newValues);

        // try {
        //     emailjs.send("", "", newValues, "")
        //     .then(res => {
        //         handleButtonState('Sent');
        //         handleButtonDisabled(true);
        //     })
        // } catch (error) {
        //     handleMessage(error.message);
        // }
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const referredBy = {
        google: "Google",
        instagram: "Instagram",
        friend: "Referred by a friend",
        other: "Other"
    };
    const services = {
        meditation: "Meditation Initiation",
        sadhana: "Sadhana Development",
        himalayan: "Himalayan Integrated Practice"
    };

    const contactFormSchema = Yup.object().shape({
        first_name: Yup.string().min(2, '* First name is too short').max(20, "* 20 maximum characters").required('* Required'),
        last_name: Yup.string().min(2, '* Last name is too short').max(20, "* 20 maximum characters").required('* Required'),
        email: Yup.string().email("* Invalid email").required("* Required"),
        tel: Yup.string().matches(phoneRegExp, `* This doesn't look like a phone number`).max(10, '* Phone number is too long').required("* Required"),
        question_1: Yup.string().oneOf(Object.values(referredBy), "* Must select a valid option").required("* Required"),
        question_2: Yup.string().oneOf(Object.values(services), "* Must select a valid option").required("* Required"),
        goals: Yup.string().min(4, "* Message is too short").max(800, "* 800 maximum characters").required("* Required"),
        message: Yup.string().min(4, "* Message is too short").max(800, "* 800 maximum characters").required("* Required")
    });

    return (
    <>
        <div className='page_width'>
            <main id='connect'>
                <section className='content'>
                    <h2 className='h1'>Connect</h2>
                    
                    <div className='form-wrap'>
                        <Formik 
                            initialValues={{ first_name: "", last_name: "", email: "", tel: "", question_1: "", question_2: "", message: "" }}
                        > 
                            <Form id='contact-form'>
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
                                    </div>

                                    <div className='flex'>
                                        <div className='field_wrap'>
                                            <div className='flex column-reverse'>
                                                <label htmlFor="goals" id='goals'>
                                                    What are your goals?
                                                </label>
                                                <Field
                                                    name='goals'
                                                />
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
                            </Form>
                        </Formik>
                    </div>
                </section>
            </main>
        </div>
    </>
    );
}

export default Connect;