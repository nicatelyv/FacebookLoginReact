import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { Helmet } from 'react-helmet'
import './style.scss'
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

function SignUpPage() {
    return (
        <section className='signUpSection'>
            <Helmet>
                <title>Sign Up for Facebook | Facebook</title>
            </Helmet>
            <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='Facebook'></img>
            <div className='signupmain'>
                <div id='texts'>
                    <h1>Create a new account</h1>
                    <h2>It’s quick and easy.</h2>
                </div>
                <Formik
                    initialValues={{ firstName: '', lastName: '', password: '', email: '', gender: '' }}
                    validationSchema={Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less').required('*'),
                        lastName: Yup.string()
                            .max(20, 'Must be 20 characters or less').required('*'),
                        password: Yup.string()
                            .max(15, 'Must be 15 characters or less').required('*Enter password'),
                        email: Yup.string().required('*Enter email or mobile number'),
                        gender: Yup.string().required(<i class="fa-solid fa-triangle-exclamation"></i>),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form>
                        <div id='nameinputs'>
                            <div>
                            <Field id='fnameinp' name="firstName" type="text" placeholder='First name' />
                            <ErrorMessage name="firstName" />
                            </div>

                            <div>
                            <Field id='lnameinp' name="lastName" type="text" placeholder='Last name' />
                            <ErrorMessage name="lastName" />
                            </div>
                        </div>
                        <Field name="email" type="text" placeholder='Mobile number or email' />
                        <div id='errors'><ErrorMessage name="email" /></div>
                        <Field name="password" type="password" placeholder='New password' />
                        <div id='errors'><ErrorMessage name="password" /></div>
                        <p>Birthday</p>
                        <div id='birthday'>
                            <select aria-label="Month" for='monthinp' name="birthday_month" id="month" title="Month" class="_9407 _5dba _9hk6 _8esg" aria-describedby="js_146">
                                <option id='monthinp' name="birthday_month" value="Jan" selected="Jan">Jan</option>
                                <option id='monthinp' name="birthday_month" value="Feb">Feb</option>
                                <option id='monthinp' name="birthday_month" value="Mar">Mar</option>
                                <option id='monthinp' name="birthday_month" value="Apr">Apr</option>
                                <option id='monthinp' name="birthday_month" value="May">May</option>
                                <option id='monthinp' name="birthday_month" value="Jun">Jun</option>
                                <option id='monthinp' name="birthday_month" value="Jul">Jul</option>
                                <option id='monthinp' name="birthday_month" value="Aug">Aug</option>
                                <option id='monthinp' name="birthday_month" value="Sep">Sep</option>
                                <option id='monthinp' name="birthday_month" value="Oct">Oct</option>
                                <option id='monthinp' name="birthday_month" value="Nov">Nov</option>
                                <option id='monthinp' name="birthday_month" value="Dec">Dec</option>
                            </select>

                            <select aria-label="Day" name="birthday_day" id="day" title="Day" class="_9407 _5dba _9hk6 _8esg">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select aria-label="Year" name="birthday_year" id="year" title="Year" class="_9407 _5dba _9hk6 _8esg"><option value="2023" selected="1">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                            </select>
                        </div>
                        <p id='gendertext'>Gender <div id='errors'><ErrorMessage name="gender" /></div></p>
                        <div id='genders'>
                            <div id='gender'>
                                <label for='gender1'>Female</label>
                                <Field id='gender1' type='radio' name='gender' value='Female' />
                            </div>
                            <div id='gender'>
                                <label for='gender2'>Male</label>
                                <Field id='gender2' type='radio' name='gender' value='Male' />
                            </div>
                            <div id='gender'>
                                <label for='gender3'>Custom</label>
                                <Field id='gender3' type='radio' name='gender' value='Custom' />
                            </div>
                        </div>
                        <p id='ptext'>People who use our service may have uploaded your contact information to Facebook. <a href='https://www.facebook.com/help/637205020878504'>Learn more.</a></p>
                        <p id='ptext'>By clicking Sign Up, you agree to our <a href='https://www.facebook.com/legal/terms/update'>Terms</a>, <a href='https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0'>Privacy Policy</a> and <a href='https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0'>Cookies Policy</a>. You may receive SMS Notifications from us and can opt out any time.</p>
                        <button type="submit">Sign Up</button>
                        <Link id='haveaccount' to={'/'}>Already have an account?</Link>
                    </Form>
                </Formik>
            </div>
        </section>
    )
}

export default SignUpPage