import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 

        <div id="page" class="page font--jakarta">

<div id="login" class="bg--scroll login-section division">
				<div class="container">
					<div class="row justify-content-center">


						
						<div class="col-lg-11">
							<div class="register-page-wrapper r-16 bg--fixed">	
								<div class="row">


									
									<div class="col-md-6">
										<div class="register-page-txt color--white">

											
										<span style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>NE&P</span>	

											
											<h2 class="s-42 w-700" style={{ marginTop: 50 }}>Welcome</h2>
											<h2 class="s-42 w-700">back to Nexus Engineering & Planning</h2>

											
											<p class="p-md mt-25">Nexus Engineering & Planning is a premier consultancy firm dedicated to delivering innovative engineering and planning solutions that drive sustainable development and urban transformation.
											</p>

											
											<div class="register-page-copyright">
												<p class="p-sm">&copy; 2024 NE&P. <span>All Rights Reserved</span></p>
											</div>

										</div>
									</div>	

									<div class="col-md-6">
										<div class="register-page-form">
											<form name="signinform" class="row sign-in-form">

												
												<div class="col-md-12">
													<a  href="#" class="btn btn-google ico-left">
														<img src="images/google.png" alt="google-icon" /> Sign in with Google
													</a>
												</div>  

												
												<div class="col-md-12 text-center">	
													<div class="separator-line">Or, sign in with your email</div>
												</div>

												
												<div class="col-md-12">
													<p class="p-sm input-header">Email address</p>
													<input class="form-control email" type="email" name="email" placeholder="example@example.com" /> 
												</div>
												<div class="col-md-12">
													<p class="p-sm input-header">Password</p>
													<div class="wrap-input">
														<span class="btn-show-pass ico-20"><span class="flaticon-visibility eye-pass"></span></span>
														<input class="form-control password" type="password" name="password" placeholder="* * * * * * * * *" /> 
													</div>
												</div>

												
												<div class="col-md-12">
													<div class="reset-password-link">
														<p class="p-sm"><Link to="#" class="color--theme">Forgot your password?</Link></p>
													</div>
												</div>

												<div class="col-md-12">
													<button type="submit" class="btn btn--theme hover--theme submit">Log In</button>
												</div> 

												
												<div class="col-md-12">
													<p class="create-account text-center">
														Don't have an account? <Link to="/register" class="color--theme">Sign up</Link>
													</p>
												</div>  

											</form> 
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