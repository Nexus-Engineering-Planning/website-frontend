import React, { Component } from 'react'
import Logo from "../../Assets/11.png"
import { Link } from 'react-router-dom';

const Index = () => {
    return ( 
        <>

		<div id="page" class="page font--jakarta">
			<header id="header" class="tra-menu navbar-light white-scroll">
				<div class="header-wrapper">
				    <div class="wsmobileheader clearfix">	  	
								<Link to="/" class="logo-white">
									<span style={{ color: 'black', fontWeight: 'bold', fontSize: 35 }}>NE&P</span>
								</Link>
				    	<a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>	
				 	</div>

				  	<div class="wsmainfull menu clearfix">
	    				<div class="wsmainwp clearfix">
	    					<div class="desktoplogo">
	    						<Link to="/" class="logo-black">
									<span style={{ fontWeight: 'bold', fontSize: 35, color: 'black' }}>NE&P</span>
	    						</Link>
	    					</div>

	    					<div class="desktoplogo">
								<Link to="/" class="logo-white">
									<span style={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}>NE&P</span>
								</Link>
	    					</div>

	      					<nav class="wsmenu clearfix">
	        					<ul class="wsmenu-list nav-theme">

						          	<li aria-haspopup="true"><Link to="/about" class="h-link">About</Link></li>
							    	<li class="nl-simple" aria-haspopup="true"><Link to="/contact" class="h-link">Contact Us</Link></li>
									<li aria-haspopup="true"><a href="#" class="h-link">Data & Dashboards <span class="wsarrow"></span></a>
	            						<ul class="sub-menu">
	            							<li aria-haspopup="true"><Link to="/">Free Dashboard</Link></li>
	            							<li aria-haspopup="true"><Link to="/login">User Sign in</Link></li>
						           		</ul>
								    </li>

							    	<li class="nl-simple" aria-haspopup="true"><Link to="/faq" class="h-link">FAQs</Link></li>

								    <li class="nl-simple" aria-haspopup="true">
										<Link to="/register"  class="btn r-04 btn--theme hover--tra-white last-link">Get Started</Link>
								    </li> 


	        					</ul>
	        				</nav>


	    				</div>
	    			</div>
				</div>
			</header>


            <section id="hero-1" class="bg--scroll hero-section">
				<div class="container" style={{ height: 500, alignItems: 'center', justifyContent: 'center' }}>	
					<div class="row d-flex align-items-center">

						<div class="col-md-6">
							<div class="hero-1-txt color--white wow fadeInRight">

								<h2 class="s-58 w-700">Welcome to Nexus Engineering & Planning</h2>

								<p class="p-xl">Nexus Engineering & Planning is a premier consultancy firm dedicated to delivering innovative engineering and planning solutions that drive sustainable development and urban transformation. 
								</p>
								<Link to="/register" class="btn r-04 btn--theme hover--tra-white">Get started for free</Link>

							</div>
						</div>

						<div class="col-md-6">	
							<div class="hero-1-img wow fadeInLeft">	
								<img style={{ borderRadius: 30 }} class="img-fluid" src="images/new1.jpeg" alt="hero-image" />					
							</div>
						</div>	
						

					</div> 
				</div>
			</section>

			<section id="features-6" class="py-100 features-section division">
				<div class="container">


					<div class="row justify-content-center">	
						<div class="col-md-10 col-lg-9">
							<div class="section-title mb-70">	

								<h2 class="s-50 w-700">Tailored Solutions for Your Needs</h2>	
	
								<p class="s-21 color--grey">"Delivering personalized solutions to meet your unique needs."</p>
									
							</div>	
						</div>
					</div>

					<div class="fbox-wrapper text-center">
						<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">

		 					<div class="col">
		 						<div class="fbox-6 fb-1 wow fadeInUp">
									<div class="fbox-ico ico-55">
										<div class="shape-ico color--theme">
											<span class="bx bxs-plane-alt" style={{ fontSize: 35 }}></span>
										</div>
									</div>
									<div class="fbox-txt">
										<h6 class="s-20 w-700">Urban Planning</h6>
										<p>We specialize in creating comprehensive urban plans that balance growth with sustainability, ensuring the efficient use of resources and the creation of vibrant, livable communities.</p>
									</div>

		 						</div>
		 					</div>
		 					<div class="col">
		 						<div class="fbox-6 fb-2 wow fadeInUp">
									<div class="fbox-ico ico-55">
										<div class="shape-ico color--theme">
											<span class="bx bxs-brightness" style={{ fontSize: 35 }}></span>
										</div>
									</div>
									<div class="fbox-txt">
										<h6 class="s-20 w-700">Civil Engineering</h6>
										<p>Our civil engineering team delivers robust infrastructure solutions, including transportation systems, water management, and public facilities.</p>
									</div>

		 						</div>
		 					</div>
		 					<div class="col">
		 						<div class="fbox-6 fb-3 wow fadeInUp">
									<div class="fbox-ico ico-55">
									<div class="shape-ico color--theme">
											<span class="bx bxs-chalkboard" style={{ fontSize: 35 }}></span>
										</div>
									</div>
									<div class="fbox-txt">
										<h6 class="s-20 w-700">Environmental Consulting</h6>
										<p>We offer expert environmental assessments and sustainability strategies to help clients minimize their ecological footprint and comply with regulatory requirements</p>
									</div>

		 						</div>
		 					</div>

		 					<div class="col">
		 						<div class="fbox-6 fb-4 wow fadeInUp">

									<div class="fbox-ico ico-55">
									<div class="shape-ico color--theme">
											<span class="bx bxl-product-hunt" style={{ fontSize: 35 }}></span>
										</div>
									</div>

									<div class="fbox-txt">
										<h6 class="s-20 w-700">Project Management</h6>
										<p> From concept to completion, our project management services ensure that projects are delivered on time, within budget, and to the highest quality standards</p>
									</div>

		 						</div>
		 					</div>


						</div>
					</div>


				</div>
			</section>

			<hr class="divider" />

			<section id="lnk-1" class="pt-100 ct-02 content-section division">
				<div class="container">

					<div class="row d-flex align-items-center">


						<div class="col-md-6">
							<div class="img-block left-column wow fadeInRight">
								<img class="img-fluid" src="images/img-10.png" alt="content-image" />
							</div>
						</div>


						<div class="col-md-6">
							<div class="txt-block right-column wow fadeInLeft">

						 		<span class="section-id">Our Commitmment</span>

								<h2 class="s-46 w-700">Join us as we build a better future, one project at a time.</h2>

								<p>Nexus Engineering & Planning is dedicated to making a positive impact on the world through thoughtful engineering and planning. Our team of passionate professionals is committed to delivering solutions that are not only effective and efficient but also equitable and sustainable.
								</p>

							</div>
						</div>	


					</div>	


				</div>	   
			</section>	

			<section class="pt-100 ct-01 content-section division">
				<div class="container">

					<div class="row d-flex align-items-center">

						<div class="col-md-6 order-last order-md-2">
							<div class="txt-block left-column wow fadeInRight">

								<div class="txt-box">
									<h5 class="s-24 w-700">Our Values</h5>
									
								</div>
	
								<div class="txt-box mb-0">
									<ul class="simple-list">

										<li class="list-item">
											<p>*Innovation:* We embrace innovation in all aspects of our work, continually seeking new and better ways to solve problems and deliver value to our clients.

											</p>
										</li>

										<li class="list-item">
											<p class="mb-0">*Sustainability:* We are committed to promoting sustainable practices that protect the environment and enhance the well-being of communities.

											</p>
										</li>

										<li class="list-item mt-3">
											<p class="mb-0">*Collaboration:* We believe in the power of collaboration, working closely with clients, stakeholders, and partners to achieve shared goals.


											</p>
										</li>

										<li class="list-item mt-3">
											<p class="mb-0">⁠*Integrity:* We conduct our business with the utmost integrity, ensuring transparency, honesty, and accountability in all our interactions.

											</p>
										</li>

									</ul>

								</div>	

	
							</div>
						</div>	
						<div class="col-md-6 order-first order-md-2">
							<div class="img-block right-column wow fadeInLeft">
								<img class="img-fluid" src="images/img-06.png" alt="content-image" />
							</div>
						</div>


					</div>	


				</div>	 
			</section>

			<hr class="divider" />
		
			<section class="py-100 ct-02 content-section division">
				<div class="container">


					<div class="row d-flex align-items-center">


						<div class="col-md-6">
							<div class="img-block left-column wow fadeInRight">
								<img class="img-fluid" src="images/img-09.png" alt="content-image" />
							</div>
						</div>


						<div class="col-md-6">
							<div class="txt-block right-column wow fadeInLeft">


								<div class="cbox-2 process-step">
									
									<div class="ico-wrap">
										<div class="cbox-2-ico bg--theme color--white">1</div>
										<span class="cbox-2-line"></span>
									</div>
	
									
									<div class="cbox-2-txt">
										<h5 class="s-22 w-700">Register in 30 seconds</h5>
										<p>Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus 
										   sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula 
										   quaerat
										</p>
									</div>

								</div>

								<div class="cbox-2 process-step">
									
									<div class="ico-wrap">
										<div class="cbox-2-ico bg--theme color--white">2</div>
										<span class="cbox-2-line"></span>
									</div>
	
									
									<div class="cbox-2-txt">
										<h5 class="s-22 w-700">Customizable Dashboards</h5>
										<p>Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus 
										   sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula 
										   quaerat
										</p>
									</div>

								</div>


								<div class="cbox-2 process-step">
									
									<div class="ico-wrap">
										<div class="cbox-2-ico bg--theme color--white">3</div>
									</div>
	
									
									<div class="cbox-2-txt">
										<h5 class="s-22 w-700">Improved Productivity</h5>
										<p class="mb-0">Ligula risus auctor tempus feugiat dolor lacinia nemo purus in 
											lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum n
											eque ligula quaerat
										</p>
									</div>
									
								</div>	


							</div>
						</div>


					</div>


				</div>	 
			</section>	



			<section id="reviews-1" class="pt-100 shape--06 shape--gr-whitesmoke reviews-section">
				<div class="container">


					<div class="row justify-content-center">	
						<div class="col-md-10 col-lg-9">
							<div class="section-title mb-70">	

								
								<h2 class="s-50 w-700">Here’s what our amazing clients are saying</h2>	

									
								<p class="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
									
							</div>	
						</div>
					</div>


				
					<div class="row">
						<div class="col">					
							<div class="owl-carousel owl-theme reviews-1-wrapper">


								
								<div class="review-1 bg--white-100 block-shadow r-08">

									
		 							<div class="review-ico ico-65"><span class="flaticon-quote"></span></div>

									
									<div class="review-txt">

										
										<p>Etiam sapien sagittis congue augue a massa varius egestas ultrice varius magna 
										   a tempus aliquet undo cursus suscipit 			   
										</p>

										
										<div class="author-data clearfix">

											
											<div class="review-avatar">
												<img src="images/review-author-1.jpg" alt="review-avatar" />
											</div>
														
											
											<div class="review-author">
												<h6 class="s-18 w-700">Scott Boxer</h6>
												<p class="p-sm">@scott_boxer</p>
											</div>	

										</div>

									</div>	

								</div>


								
								<div class="review-1 bg--white-100 block-shadow r-08">

									
		 							<div class="review-ico ico-65"><span class="flaticon-quote"></span></div>

									
									<div class="review-txt">

										
										<p>At sagittis congue augue diam egestas magna an ipsum vitae purus ipsum primis 
										   and cubilia laoreet augue egestas a luctus donec ltrice ligula porta augue magna 
										   suscipit lectus gestas		   
										</p>

										
										<div class="author-data clearfix">

											
											<div class="review-avatar">
												<img src="images/review-author-2.jpg" alt="review-avatar" />
											</div>
														
											
											<div class="review-author">
												<h6 class="s-18 w-700">Joel Peterson</h6>
												<p class="p-sm">Internet Surfer</p>
											</div>	

										</div>

									</div>	

								</div>
						
						
								
								<div class="review-1 bg--white-100 block-shadow r-08">

									
		 							<div class="review-ico ico-65"><span class="flaticon-quote"></span></div>

									
									<div class="review-txt">

										
										<p>Mauris gestas magnis a sapien etiam sapien congue an augue egestas and ultrice 
										   vitae purus diam an integer congue magna ligula egestas magna suscipit 
										</p>

										
										<div class="author-data clearfix">

											
											<div class="review-avatar">
												<img src="images/review-author-3.jpg" alt="review-avatar" />
											</div>
														
											
											<div class="review-author">
												<h6 class="s-18 w-700">Marisol19</h6>
												<p class="p-sm">@marisol19</p>
											</div>	

										</div>

									</div>	

								</div>	


								
								<div class="review-1 bg--white-100 block-shadow r-08">

									
		 							<div class="review-ico ico-65"><span class="flaticon-quote"></span></div>

									
									<div class="review-txt">

										
										<p>Mauris donec a magnis sapien etiam pretium a congue augue volutpat lectus 
										   aenean magna and undo mauris lectus laoreet tempor egestas rutrum
										</p>

										
										<div class="author-data clearfix">

											
											<div class="review-avatar">
												<img src="images/review-author-4.jpg" alt="review-avatar" />
											</div>
														
											
											<div class="review-author">
												<h6 class="s-18 w-700">Leslie D.</h6>
												<p class="p-sm">Web Developer</p>
											</div>	

										</div>

									</div>	

								</div>	
								
								
								
								<div class="review-1 bg--white-100 block-shadow r-08">

									
		 							<div class="review-ico ico-65"><span class="flaticon-quote"></span></div>

									
									<div class="review-txt">

										
										<p>An augue cubilia undo laoreet magna suscipit egestas ipsum lectus purus ipsum 
										   and primis augue an ultrice ligula egestas suscipit a lectus gestas auctor tempus 
										   feugiat impedit   
										</p>

										
										<div class="author-data clearfix">

											
											<div class="review-avatar">
												<img src="images/review-author-5.jpg" alt="review-avatar" />
											</div>
														
											
											<div class="review-author">
												<h6 class="s-18 w-700">Jennifer Harper</h6>
												<p class="p-sm">App Developer</p>
											</div>	

										</div>

									</div>	

								</div>	
								
								
								
								<div class="review-1 bg--white-100 block-shadow r-08">

									
		 							<div class="review-ico ico-65"><span class="flaticon-quote"></span></div>

									
									<div class="review-txt">

										
										<p>An augue cubilia laoreet undo magna ipsum semper suscipit egestas magna ipsum 
										   ligula a vitae purus and ipsum primis cubilia magna suscipit			   
										</p>

										
										<div class="author-data clearfix">

											
											<div class="review-avatar">
												<img src="images/review-author-6.jpg" alt="review-avatar" />
											</div>
														
											
											<div class="review-author">
												<h6 class="s-18 w-700">Jonathan Barnes</h6>
												<p class="p-sm">jQuery Programmer</p>
											</div>	

										</div>

									</div>	

								</div>	
								
								
								
								<div class="review-1 bg--white-100 block-shadow r-08">

									
		 							<div class="review-ico ico-65"><span class="flaticon-quote"></span></div>

									
									<div class="review-txt">

										
										<p>Augue egestas porta tempus volutpat egestas augue cubilia laoreet a magna 
										   suscipit luctus dolor blandit vitae purus neque tempus an aliquet porta gestas 
										   rutrum blandit vitae
										</p>

										
										<div class="author-data clearfix">

											
											<div class="review-avatar">
												<img src="images/review-author-7.jpg" alt="review-avatar" />
											</div>
														
											
											<div class="review-author">
												<h6 class="s-18 w-700">Mike Harris</h6>
												<p class="p-sm">Graphic Designer</p>
											</div>	

										</div>

									</div>	

								</div>	


								
								<div class="review-1 bg--white-100 block-shadow r-08">

									
		 							<div class="review-ico ico-65"><span class="flaticon-quote"></span></div>

									
									<div class="review-txt">

										
										<p>Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna 
										   suscipit luctus dolor blandit at purus tempus feugiat impedit
										</p>

									
										<div class="author-data clearfix">

										
											<div class="review-avatar">
												<img src="images/review-author-8.jpg" alt="review-avatar" />
											</div>
														
											
											<div class="review-author">
												<h6 class="s-18 w-700">Evelyn Martinez</h6>
												<p class="p-sm">WordPress Consultant</p>
											</div>	

										</div>	

									</div>	

								</div>


							</div>
						</div>
					</div>	


				</div>	
			</section>	
	
			<section id="faqs-3" class="pt-100 faqs-section">				
				<div class="container">


					<div class="row justify-content-center">	
						<div class="col-md-10 col-lg-9">
							<div class="section-title mb-70">	

								<h2 class="s-50 w-700">Questions & Answers</h2>	
	
								<p class="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
									
							</div>	
						</div>
					</div>


					<div class="faqs-3-questions">
						<div class="row">

							<div class="col-lg-6">
								<div class="questions-holder">


									
									<div class="question mb-35 wow fadeInUp">

										
										<h5 class="s-22 w-700"><span>1.</span> Getting started with Martex</h5>

										
										<p class="color--grey">Etiam amet mauris suscipit in odio integer congue metus 
										   and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna 
										   suscipit luctus blandit and laoreet
										</p>

									</div>	


														
									<div class="question mb-35 wow fadeInUp">

										
										<h5 class="s-22 w-700"><span>2.</span> What's inside the package?</h5>

										
										<p class="color--grey">An enim nullam tempor sapien gravida donec ipsum and enim 
											porta justo integer at velna vitae auctor integer congue undo magna laoreet 
											augue pretium purus pretium ligula 
										</p>

									</div>				
									<div class="question mb-35 wow fadeInUp">

										<h5 class="s-22 w-700"><span>3.</span> How do I choose a plan?</h5>

										<ul class="simple-list color--grey">

											<li class="list-item">
												<p>Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium 
												   purus pretium rutrum tempor sapien
												</p>
											</li>

											<li class="list-item">
												<p>Nemo ipsam egestas volute undo turpis purus lipsum primis aliquam sapien 
												   quaerat sodales pretium a purus
												</p>
											</li>

										</ul>

									</div>


								</div>
							</div>	
							<div class="col-lg-6">
								<div class="questions-holder">
				
									<div class="question mb-35 wow fadeInUp">

										<h5 class="s-22 w-700"><span>4.</span> How does Martex handle my privacy?</h5>
										<p class="color--grey">Quaerat sodales sapien euismod blandit purus a purus 
											ipsum primis in cubilia laoreet augue luctus dolor luctus
										</p>
										<p class="color--grey">An enim nullam tempor sapien gravida donec congue metus. 
											Vitae arcu mollis blandit integer nemo volute velna
										</p>

									</div>

									
									<div class="question mb-35 wow fadeInUp">

										<h5 class="s-22 w-700"><span>5.</span> I have an issue with my account</h5>
										<p class="color--grey">Cubilia laoreet augue egestas and luctus donec curabite 
											diam vitae dapibus libero and quisque gravida donec neque blandit justo 
											aliquam molestie nunc sapien justo
										</p>

									</div>

									<div class="question mb-35 wow fadeInUp">

										<h5 class="s-22 w-700"><span>6.</span> Can I cancel at anytime?</h5>

										<p class="color--grey">An enim nullam tempor sapien gravida donec ipsum and enim 
											porta justo integer at velna vitae auctor integer congue undo magna laoreet 
											augue pretium purus pretium ligula 
										</p>

									</div>

								</div>
							</div>


						</div>	
					</div>	
					<div class="row">
						<div class="col">	
							<div class="more-questions mt-40">
								<div class="more-questions-txt bg--white-400 r-100">
									<p class="p-lg">Have any questions? 
										<Link to="/contact" class="color--theme"> Get in Touch</Link>
									</p>
								</div>
							</div>
						</div>
					</div>


				</div>	
			</section>	
			<section id="banner-3" class="pt-100 banner-section">
				<div class="container">

					<div class="banner-3-wrapper bg--03 bg--scroll r-16">
						<div class="banner-overlay">
							<div class="row">


								<div class="col">
									<div class="banner-3-txt color--white">

										<h2 class="s-48 w-700">Starting with NE&P is easy, fast and free</h2>

										<p class="p-xl">It only takes a few clicks to get started</p>

										<a href="signup-1.html" class="btn r-04 btn--theme hover--tra-white">Get srarted - it's free</a>

									</div>
								</div>	


							</div> 
						</div>   
					</div>   


				</div> 
			</section>

			
			<footer id="footer-3" class="pt-100 footer ft-3-ntr">
				<div class="container">

					<div class="row">


						<div class="col-xl-3">
							<div class="footer-info">
								<span style={{ color: 'black', fontWeight: 'bold', fontSize: 35 }}>NE&P</span>
							</div>	
						</div>	

						<div class="col-sm-4 col-lg-3 col-xl-2">
							<div class="footer-links fl-1">
				
								<h6 class="s-17 w-700">Our Company</h6>
								<ul class="foo-links clearfix">
									<li><p><Link to="#">About Us</Link></p></li>
									<li><p><Link to="#">Our Blog</Link></p></li>
									<li><p><Link to="#">Community</Link></p></li>			
								</ul>

							</div>
						</div>


						<div class="col-sm-4 col-lg-2">
							<div class="footer-links fl-2">
												
								<h6 class="s-17 w-700">Product</h6>

								<ul class="foo-links clearfix">
									<li><p><Link to="#">Integration</Link></p></li>
									<li><p><Link to="#">What's New</Link></p></li>			
								</ul>

							</div>	
						</div>	

						<div class="col-sm-4 col-lg-3 col-xl-2">
							<div class="footer-links fl-3">
												
								
								<h6 class="s-17 w-700">Legal</h6>

								
								<ul class="foo-links clearfix">
									<li><p><Link to="#">Terms of Use</Link></p></li>										
									<li><p><Link to="#">Privacy Policy</Link></p></li>
									<li><p><Link to="#">Cookie Policy</Link></p></li>
								</ul>

							</div>	
						</div>


						<div class="col-sm-10 col-md-8 col-lg-4 col-xl-3">
							<div class="footer-form">

								<h6 class="s-17 w-700">SUBSCRIBNE TO OUR NEWSLETTER</h6>

								<form class="newsletter-form">
											
									<div class="input-group r-06">
										<input type="email" class="form-control" placeholder="Email Address" required id="s-email" />								
										<span class="input-group-btn ico-15">
											<button type="submit" class="btn color--theme">
												<span class="bx bx-arrow-right"></span>
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
									<p class="p-sm">&copy; 2024 NE&P. <span>All Rights Reserved</span></p>
								</div>
							</div>

							<div class="col">
								<ul class="bottom-footer-socials ico-20 text-end">
									<li><a href="#"><span class="bx bxl-facebook"></span></a></li>
									<li><a href="#"><span class="bx bxl-twitter"></span></a></li>
									<li><a href="#"><span class="bx bxl-instagram"></span></a></li>
									<li><a href="#"><span class="bx bxl-youtube"></span></a></li>
								</ul>
							</div>


						</div>
					</div>


				</div>
			</footer>   




        </div>
        </>
     );
}
 
export default Index;