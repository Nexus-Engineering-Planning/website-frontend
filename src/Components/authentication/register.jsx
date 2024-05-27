import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 

        <div id="page" class="page font--jakarta">

			<div id="signup" class="bg--scroll login-section division">
				<div class="container">
					<div class="row justify-content-center">


					
						<div class="col-lg-11">
							<div class="register-page-wrapper r-16 bg--fixed">	
								<div class="row">


									
									<div class="col-md-6">
										<div class="register-page-form">
											<form name="signupform" class="row sign-up-form">

												
												<div class="col-md-12">
													<a  href="#" class="btn btn-google ico-left">
														<img src="images/google.png" alt="google-icon" /> Sign up with Google
													</a>
												</div>  

												
												<div class="col-md-12 text-center">	
													<div class="separator-line">Or, sign up with your email</div>
												</div>

												
												<div class="col-md-12">
													<p class="p-sm input-header">Full name</p>
													<input class="form-control name" type="text" name="name" placeholder="John Doe" /> 
												</div>

												
												<div class="col-md-12">
													<p class="p-sm input-header">Email address</p>
													<input class="form-control email" type="email" name="email" placeholder="example@example.com" /> 
												</div>

												
												<div class="col-md-12">
													<p class="p-sm input-header">Password</p>
													<div class="wrap-input">
														<span class="btn-show-pass ico-20"><span class="flaticon-visibility eye-pass"></span></span>
														<input class="form-control password" type="password" name="password" placeholder="min 8 characters" /> 
													</div>
												</div>

												
												<div class="col-md-12">
													<div class="form-data">
														<span>By clicking “Create Account”, you agree to our 
														<Link to="#">Terms</Link> and that you have read our
															<Link to="#"> Privacy Policy</Link>
														</span>
													</div>
												</div>
													
												
												<div class="col-md-12">
													<button type="submit" class="btn btn--theme hover--theme submit">Create Account</button>
												</div> 

												
												<div class="col-md-12">
													<p class="create-account text-center">
														Already have an account? <Link to="/login" class="color--theme">Log in</Link>
													</p>
												</div> 

											</form>
										</div>
									</div>	


									
									<div class="col-md-6">
										<div class="register-page-txt color--white">


											
						 					<span class="section-id">Start for free</span>

											
											<h2 class="s-48 w-700">Create</h2>
											<h2 class="s-48 w-700">an account</h2>

											
											<p class="p-md mt-25">Nexus Engineering & Planning is a premier consultancy firm dedicated to delivering innovative engineering and planning solutions that drive sustainable development and urban transformation.
											</p>

											
											<div class="register-page-copyright">
												<p class="p-sm">&copy; 2024 NE&P. <span>All Rights Reserved</span></p>
											</div>

										</div>
									</div>	


								</div>  
							</div>	
						</div>	

			 		</div>	   
			 	</div>	  		
			</div>	

		</div>	
     );
}
 
export default Login;