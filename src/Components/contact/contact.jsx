import React, { Component } from 'react'

const Contact = () => {
    return ( 
        <>
        <header id="header" class="tra-menu navbar-dark inner-page-header white-scroll">
				<div class="header-wrapper">


				    <div class="wsmobileheader clearfix">	  	
				    	<span class="smllogo"><img src="images/logo-blue.png" alt="mobile-logo" /></span>
				    	<a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>	
				 	</div>


				  	<div class="wsmainfull menu clearfix">
	    				<div class="wsmainwp clearfix">


	    					<div class="desktoplogo">
	    						<a href="demo-1.html" class="logo-black">
	    							<img class="light-theme-img" src="images/logo-blue.png" alt="logo" />
	    							<img class="dark-theme-img" src="images/logo-blue-white.png" alt="logo" />
	    						</a>
	    					</div>
	    					

	    					
	    					<div class="desktoplogo">
	    						<a href="demo-1.html" class="logo-white"><img src="images/logo-blue-white.png" alt="logo" /></a>
	    					</div>


	    					
	      					<nav class="wsmenu clearfix">
	        					<ul class="wsmenu-list nav-theme">


	        						
						          	<li aria-haspopup="true"><a href="#" class="h-link">Company <span class="wsarrow"></span></a>
	            						<ul class="sub-menu">
	            							<li aria-haspopup="true"><a href="about.html">About Us</a></li>
	            							<li aria-haspopup="true"><a href="careers.html">Careers <span class="sm-info">4</span></a></li>
	            							<li aria-haspopup="true"><a href="reviews.html">Customers</a></li>
	            							<li aria-haspopup="true"><a href="blog-listing.html">Our Blog</a></li>
	            							<li aria-haspopup="true"><a href="contacts.html">Contact Us</a></li>	
						           		</ul>
								    </li>

								    
							    	<li class="nl-simple" aria-haspopup="true"><a href="projects.html" class="h-link">Case Studies</a></li>


								    
							    	<li class="nl-simple" aria-haspopup="true"><a href="pricing-1.html" class="h-link">Pricing</a></li>


								    
							    	<li class="nl-simple" aria-haspopup="true"><a href="faqs.html" class="h-link">FAQs</a></li>


							    	<li class="nl-simple reg-fst-link mobile-last-link" aria-haspopup="true">
							    		<a href="login-2.html" class="h-link">Sign In</a>
							    	</li>


								    
								    <li class="nl-simple" aria-haspopup="true">
								    	<a href="signup-2.html" class="btn r-04 btn--theme hover--theme last-link">Get Started</a>
								    </li> 


	        					</ul>
	        				</nav>	


	    				</div>
	    			</div>	


				</div>   
			</header>
          <section id="contacts-1" class="pb-50 inner-page-hero contacts-section division">				
				<div class="container">


					<div class="row justify-content-center">	
						<div class="col-md-10 col-lg-9">
							<div class="section-title text-center mb-80">	

								<h2 class="s-52 w-700">Questions? Let's Talk</h2>	

								<p class="p-lg">Want to learn more about Martex, get a quote, or speak with an expert? 
									Let us know what you are looking for and we’ll get back to you right away
								</p>
									
							</div>	
						</div>
					</div>


				 	<div class="row justify-content-center">	
				 		<div class="col-md-11 col-lg-10 col-xl-8">
				 			<div class="form-holder">
								<form name="contactform" class="row contact-form">

									<div class="col-md-12 input-subject">
										<p class="p-lg">This question is about: </p>
										<span>Choose a topic, so we know who to send your request to: </span>
										<select class="form-select subject" aria-label="Default select example">
									    	<option selected>This question is about...</option>	
											<option>Registering/Authorising</option>
											<option>Using Application</option>
											<option>Troubleshooting</option>
											<option>Backup/Restore</option>
											<option>Other</option>
									    </select>
									</div>
																						
									<div class="col-md-12">
										<p class="p-lg">Your Name: </p>
										<span>Please enter your real name: </span>
										<input type="text" name="name" class="form-control name" placeholder="Your Name*" /> 
									</div>
												
									<div  class="col-md-12">
										<p class="p-lg">Your Email Address: </p>
										<span>Please carefully check your email address for accuracy</span>
										<input type="text" name="email" class="form-control email" placeholder="Email Address*" /> 
									</div>
		
									<div class="col-md-12">
										<p class="p-lg">Explain your question in details: </p>
										<span>Your OS version, Martex version & build, steps you did. Be VERY precise!</span>
										<textarea class="form-control message" name="message" rows="6" placeholder="I have a problem with..."></textarea>
									</div> 
																	
									<div class="col-md-12 mt-15 form-btn text-right">	
										<button type="submit" class="btn btn--theme hover--theme submit">Submit Request</button>	
									</div>

									<div class="contact-form-notice">
										<p class="p-sm">We are committed to your privacy. Martex uses the information you 
										   provide us to contact you about our relevant content, products, and services. 
										   You may unsubscribe from these communications at any time. For more information, 
										   check out our <a href="privacy.html">Privacy Policy</a>.
										</p>
									</div>
																	
									<div class="col-lg-12 contact-form-msg">
										<span class="loading"></span>
									</div>	
																							
								</form>	
				 			</div>	
				 		</div>	
				 	</div>	   


				</div>	   	
			</section>	

			<hr class="divider" />


			<section id="newsletter-1" class="newsletter-section">
				<div class="newsletter-overlay">
					<div class="container">
						<div class="row d-flex align-items-center row-cols-1 row-cols-lg-2">

							<div class="col">
								<div class="newsletter-txt">	
									<h4 class="s-34 w-700">Stay up to date with our news, ideas and updates</h4>	
								</div>								
							</div>

							<div class="col">
								<form class="newsletter-form">
											
									<div class="input-group">
										<input type="email" autocomplete="off" class="form-control" placeholder="Your email address" required id="s-email" />								
										<span class="input-group-btn">
											<button type="submit" class="btn btn--theme hover--theme">Subscribe Now</button>
										</span>										
									</div>

									<label for="s-email" class="form-notification"></label>
												
								</form>							
							</div>	  


						</div>	 
					</div>  	
				</div>    
			</section>	




			<hr class="divider"></hr>  


            <footer id="footer-3" class="pt-100 footer ft-3-ntr">
				<div class="container">

					<div class="row">


						<div class="col-xl-3">
							<div class="footer-info">
								<img class="footer-logo" src="images/logo-pink.png" alt="footer-logo" />
								<img class="footer-logo-dark" src="images/logo-pink-white.png" alt="footer-logo" />
							</div>	
						</div>	

						<div class="col-sm-4 col-lg-3 col-xl-2">
							<div class="footer-links fl-1">
				
								<h6 class="s-17 w-700">Company</h6>
								<ul class="foo-links clearfix">
									<li><p><a href="about.html">About Us</a></p></li>
									<li><p><a href="blog-listing.html">Our Blog</a></p></li>						
									<li><p><a href="testimonials.html">Customers</a></p></li>	
									<li><p><a href="#">Community</a></p></li>			
								</ul>

							</div>
						</div>


						<div class="col-sm-4 col-lg-2">
							<div class="footer-links fl-2">
												
								<h6 class="s-17 w-700">Product</h6>

								<ul class="foo-links clearfix">
									<li><p><a href="features.html">Integration</a></p></li>
									<li><p><a href="download.html">What's New</a></p></li>	
									<li><p><a href="pricing-1.html">Pricing</a></p></li>	
									<li><p><a href="help-center.html">Help Center</a></p></li>			
								</ul>

							</div>	
						</div>	

						<div class="col-sm-4 col-lg-3 col-xl-2">
							<div class="footer-links fl-3">
												
								
								<h6 class="s-17 w-700">Legal</h6>

								
								<ul class="foo-links clearfix">
									<li><p><a href="terms.html">Terms of Use</a></p></li>										
									<li><p><a href="privacy.html">Privacy Policy</a></p></li>
									<li><p><a href="cookies.html">Cookie Policy</a></p></li>
									<li><p><a href="#">Site Map</a></p></li>
								</ul>

							</div>	
						</div>


						<div class="col-sm-10 col-md-8 col-lg-4 col-xl-3">
							<div class="footer-form">

								<h6 class="s-17 w-700">Follow the Best</h6>

								<form class="newsletter-form">
											
									<div class="input-group r-06">
										<input type="email" class="form-control" placeholder="Email Address" required id="s-email" />								
										<span class="input-group-btn ico-15">
											<button type="submit" class="btn color--theme">
												<span class="flaticon-right-arrow-1"></span>
											</button>
										</span>
									</div>
		
									<label for="s-email" class="form-notification"></label>
												
								</form>
														
							</div>	
						</div>


					</div>	


					<hr />


					<div class="bottom-footer">
						<div class="row row-cols-1 row-cols-md-2 d-flex align-items-center">

							<div class="col">
								<div class="footer-copyright">
									<p class="p-sm">&copy; 2023 Martex. <span>All Rights Reserved</span></p>
								</div>
							</div>

							<div class="col">
								<ul class="bottom-footer-socials ico-20 text-end">
									<li><a href="#"><span class="flaticon-facebook"></span></a></li>
									<li><a href="#"><span class="flaticon-twitter"></span></a></li>
									<li><a href="#"><span class="flaticon-instagram"></span></a></li>
									<li><a href="#"><span class="flaticon-youtube"></span></a></li>
								</ul>
							</div>


						</div>
					</div>


				</div>
			</footer> 
        </>
     );
}
 
export default Contact;