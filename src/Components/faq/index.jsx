import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const FAQ = () => {
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
								<Link to="/" class="logo-black">
									<span style={{ color: 'black', fontWeight: 'bold', fontSize: 35 }}>NE&P</span>
								</Link>
	    					</div>
	    					

	    					
	    					<div class="desktoplogo">
								<Link to="/" class="logo-white">
									<span style={{ color: 'black', fontWeight: 'bold', fontSize: 35 }}>NE&P</span>
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
          
            <section id="faqs-2" class="gr--whitesmoke pb-30 inner-page-hero faqs-section division">				
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-11 col-xl-10">


							
							<div class="inner-page-title">
								<h2 class="s-52 w-700">Questions & Answers</h2>
								<p class="p-lg">Some common questions we get about NE&P</p>
							</div>


							
					 		<div class="accordion-wrapper">
								<ul class="accordion">


									
									<li class="accordion-item is-active">

										
										
										<div class="accordion-thumb">
											<h4 class="s-28 w-700">Getting Started</h4>
										</div>


										
										<div class="accordion-panel">


											
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>1.</span> What is NE&P and how does it work?</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<p>Sagittis congue augue egestas volutpat egestas magna suscipit 
													   egestas magna ipsum vitae purus congue efficitur and ipsum primis 
													   in cubilia laoreet augue egestas luctus donec and curabitur dapibus
													</p>

												</div>

											</div>	
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>2.</span> What's inside the package?</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
										      		<p>Sagittis congue augue egestas volutpat egestas magna suscipit 
										      		   egestas and magna ipsum vitae purus and efficitur ipsum primis in 
										      		   cubilia laoreet tempor gravida congue laoreet turpis neque auctor
													</p>
										        
										      		
													<p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris 
														undo lectus laoreet and gestas neque vitae auctor eros dolor luctus 
														placerat a magna cursus congue magna impedit ligula congue maecenas
													</p>

												</div>

											</div>	
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>3.</span> Which languages does Martex support?</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<ul class="simple-list">

														<li class="list-item">
															<p>Curabitur ac dapibus libero quisque eu congue tristique 
															   neque. Phasellus blandit tristique justo aliquam quisque 
															   aliquam vitae and molestie sapien nunc justo, aliquet non 
															   molestie purus tempor
															</p>
														</li>

														<li class="list-item">
															<p>Sagittis congue augue egestas volutpat egestas magna suscipit 
															   egestas magna ipsum undo purus vitae efficitur ipsum primis in
															   cubilia laoreet augue donec egestas luctus curabitur dapibus 
															   libero
															</p>
														</li>

													</ul>

												</div>

											</div>	
											<div class="accordion-panel-item">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>4.</span> Automate testing with API</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
										      		<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum 
										      		   purus ipsum primis and augue ultrice ligula egestas suscipit lectus 
										      		   gestas integer congue a lectus porta phasellus neque blandit tristique
													</p> 

												</div>

											</div>	


										</div>	


									</li>	


									
									<li class="accordion-item">

										
										
										<div class="accordion-thumb">
											<h4 class="s-28 w-700">Manage your account</h4>
										</div>


										
										<div class="accordion-panel">


											
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>1.</span> Sign up and manage your account</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<ol class="digit-list">

														<li class="list-item">
															<p>Curabitur ac dapibus libero eu congue tristique neque</p>
														</li>

														<li class="list-item">
															<p>Sagittis congue augue egestas volutpat egestas</p>
														</li>

														<li class="list-item">
															<p>An aliquam justo suscipit congue augue</p>
														</li>

														<li class="list-item">
															<p>Gestas integer congue a lectus porta</p>
														</li>

													</ol>

												</div>

											</div>	
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>2.</span> Manage account settings</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas 
													   magna ipsum vitae purus congue and efficitur ipsum primis in cubilia 
													   laoreet augue egestas luctus donec and curabitur dapibus
													</p>

												</div>

											</div>	
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>3.</span> Change language or location settings</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris 
													   lectus laoreet gestas neque pulvinar vitae auctor eros dolor luctus 
													   placerat a magna cursus congue magna nihil mpedit ligula congue. 
													   Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. 
													   Quisque vel laoreet turpis. Viverra augue augue eget, dictum tempor 
													   diam. Sed pulvinar a consectetur nibh, imperdiet varius viverra
													</p>

												</div>

											</div>	
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>4.</span> Troubleshoot account issues</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">
													
													
										      		<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus 
										      		   ipsum primis and augue ultrice ligula egestas suscipit lectus gestas 
										      		   integer congue a lectus porta phasellus neque blandit tristique
													</p> 

													
										      		<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas 
										      			and magna ipsum vitae
													</p>

													
										      		<p>Sagittis congue augue egestas volutpat egestas and magna suscipit 
										      		   egestas magna ipsum vitae efficitur purus congue ipsum primis in 
										      		   cubilia laoreet augue egestas luctus donec and curabitur dapibus
													</p>

												</div>

											</div>	


											
											<div class="accordion-panel-item">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>5.</span> Manage accessibility settings</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris 
													   lectus laoreet at gestas neque cubilia vitae auctor eros dolor luctus
													   placerat a magna cursus congue magna nihil mpedit ligula congue. 
													   Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. 
													   Quisque vel laoreet turpis augue
													</p>

													
										      		<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas 
										      		   and magna ipsum and vitae purus efficitur ipsum primis in cubilia 
										      		   laoreet tempor gravida sapien cursus congue magna purus quaerat
													</p>
													
												</div>

											</div>	


										</div>	


									</li>


									
									<li class="accordion-item">

										
										
										<div class="accordion-thumb">
											<h4 class="s-28 w-700">Purchase and License</h4>
										</div>


										
										<div class="accordion-panel">


											
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>1.</span> How much does Martex cost?</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
										      		<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum 
										      		   purus ipsum primis and augue ultrice ligula egestas suscipit lectus 
										      		   gestas integer congue a lectus porta phasellus neque blandit tristique
													</p>

												</div>

											</div>	
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>2.</span> Do you offer discounts for annual plans?</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">
													
													
										      		<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas 
										      		   and magna ipsum vitae
													</p>

													
										      		<p>Sagittis congue augue egestas volutpat egestas and magna suscipit egestas
										      		   magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet
										      		   augue egestas luctus donec and curabitur dapibus
													</p>

												</div>

											</div>	
											<div class="accordion-panel-item">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>3.</span> I didn't receive the license key after purchased</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<ul class="simple-list">

														<li class="list-item">
															<p>Curabitur ac dapibus libero. Quisque eu congue tristique neque
															   phasellus blandit tristique justo aliquam. Aliquam vitae undo
															   molestie nunc. Quisque sapien justo, aliquet non molestie purus 
															   tempor
															</p>
														</li>

														<li class="list-item">
															<p>Sagittis congue augue egestas volutpat egestas magna suscipit 
															   egestas magna ipsum vitae purus undo efficitur ipsum primis in
															   cubilia laoreet augue egestas luctus donec curabitur dapibus libero
															</p>
														</li>

													</ul>

												</div>

											</div>	
											<div class="accordion-panel-item">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>4.</span> I can't activate Martex</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">
													
													
													<p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus
													   laoreet gestas neque pulvinar vitae auctor eros dolor luctus placerat a 
													   magna cursus congue magna nihil mpedit ligula congue. Maecenas gravida
													   porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet
													   turpis. Viverra augue augue eget, dictum tempor diam. Sed pulvinar a
													   consectetur nibh, imperdiet varius viverra
													</p>

													
										      		<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas 
										      			and magna ipsum vitae purus and efficitur ipsum primis in cubilia laoreet
										      			tempor gravida
													</p>

												</div>

											</div>	


											
											<div class="accordion-panel-item">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>5.</span> How to request a refund?</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<ul class="simple-list">

														<li class="list-item">
															<p>Curabitur ac dapibus libero. Quisque eu congue tristique</p>
														</li>

														<li class="list-item">
															<p>Congue tristique neque phasellus blandit tristique justo undo 
															   aliquam aliquam vitae molestie quisque sapien justo, aliquet non
															   molestie purus tempor
															</p>
														</li>

														<li class="list-item">
															<p>Sagittis congue augue egestas volutpat egestas magna suscipit 
															   egestas magna ipsum
															</p>
														</li>

													</ul>

												</div>

											</div>	


										</div>	


									</li>	
									<li class="accordion-item">


										<div class="accordion-thumb">
											<h4 class="s-28 w-700">Policy, Safety & Copyright</h4>
										</div>


										<div class="accordion-panel">


											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>1.</span> Copyright and rights management</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris 
													   lectus laoreet gestas neque pulvinar vitae auctor eros dolor luctus 
													   placerat a magna cursus congue magna nihil mpedit ligula congue. 
													   Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. 
													   Quisque vel laoreet turpis. Viverra augue augue eget, dictum tempor 
													   diam. Sed pulvinar a consectetur nibh, imperdiet varius viverra
													</p>

												</div>

											</div>	
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>2.</span> Manage privacy settings</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas 
													   magna ipsum vitae purus congue efficitur ipsum and primis undo cubilia 
													   a laoreet augue egestas luctus donec and curabitur dapibus
													</p>

													
													<ol class="digit-list">

														<li class="list-item">
															<p>Gestas integer congue a lectus porta</p>
														</li>

														<li class="list-item">
															<p>An aliquam justo suscipit congue augue</p>
														</li>

														<li class="list-item">
															<p>Sagittis congue augue egestas volutpat egestas</p>
														</li>

													</ol>

												</div>

											</div>	
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>3.</span> Change your subscription privacy settings</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris 
													   lectus laoreet and gestas neque vitae auctor eros dolor luctus placerat 
													   a magna cursus congue magna nihil mpedit ligula congue maecenas undo 
													   gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque 
													   vel laoreet turpis augue
													</p>

													
													<ul class="simple-list">

														<li class="list-item">
															<p>Congue tristique neque phasellus blandit tristique justo 
															   undo aliquam aliquam vitae molestie quisque and sapien justo, 
															   aliquet non molestie purus tempor
															</p>
														</li>

														<li class="list-item">
															<p>Sagittis congue augue egestas volutpat egestas magna suscipit 
															   egestas magna ipsum
															</p>
														</li>

													</ul>

												</div>

											</div>
											<div class="accordion-panel-item">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>4.</span> Protecting your identity</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris 
													   lectus laoreet gestas neque pulvinar vitae auctor eros dolor luctus 
													   placerat a magna cursus congue magna nihil mpedit ligula congue. 
													   Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. 
													   Quisque vel laoreet turpis. Viverra augue augue eget, dictum tempor 
													   diam. Sed pulvinar a consectetur nibh, imperdiet varius viverra
													</p>

													
										      		<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas 
										      		   and magna ipsum vitae purus and efficitur ipsum primis in cubilia 
										      		   laoreet tempor gravida
													</p>

												</div>

											</div>	


										</div>	


									</li>	
									<li class="accordion-item acc-last-item">

										
										
										<div class="accordion-thumb">
											<h4 class="s-28 w-700">Other Questions</h4>
										</div>


										
										<div class="accordion-panel">


											
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>1.</span> How do I get the error log?</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">
													
													
										      		<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas 
										      			and magna ipsum vitae
													</p>

													
										      		<p>Sagittis congue augue egestas volutpat egestas and magna suscipit 
										      		   egestas and magna ipsum vitae purus congue efficitur ipsum primis 
										      		   in cubilia laoreet augue egestas luctus donec and curabitur dapibus
													</p>

												</div>

											</div>	
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>2.</span> I forgot my folder password, what should I do?</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">
													
													
													<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas 
														magna ipsum vitae purus congue efficitur ipsum and primis in cubilia 
														laoreet augue egestas luctus donec and curabitur dapibus
													</p>

													
													<ol class="digit-list">

														<li class="list-item">
															<p>Gestas integer congue a lectus porta</p>
														</li>

														<li class="list-item">
															<p>An aliquam justo suscipit congue augue</p>
														</li>

														<li class="list-item">
															<p>Sagittis congue augue egestas volutpat egestas</p>
														</li>

													</ol>

												</div>

											</div>	
                                            
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>3.</span> Limitations of folder password protection</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">

													
													<p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris 
													   lectus laoreet gestas neque pulvinar vitae auctor eros dolor luctus 
													   placerat a magna cursus congue magna nihil mpedit ligula congue. 
													   Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. 
													   Quisque vel laoreet turpis. Viverra augue augue eget, dictum tempor 
													   diam. Sed pulvinar a consectetur nibh, imperdiet varius viverra
													</p>

												</div>

											</div>	


											
											<div class="accordion-panel-item mb-35">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>4.</span> Import existing library</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">
													
													
													<p>Sapien egestas, congue gestas posuere cubilia congue an ipsum mauris 
													   lectus laoreet gestas neque vitae auctor eros dolor luctus placerat a 
													   magna cursus congue magna nihil mpedit ligula congue gravida tempor 
													   porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet 
													   turpis augue
													</p>

													
										      		<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas
										      		   and magna ipsum vitae purus and efficitur ipsum primis in cubilia laoreet
										      		   tempor gravida
													</p>

												</div>

											</div>	


											
											<div class="accordion-panel-item">
												
												
												<div class="faqs-2-question">
													<h5 class="s-22 w-700"><span>5.</span> I lost my license. Can you send it to me?</h5>
												</div>

												
												<div class="faqs-2-answer color--grey">
													
													
										      		<p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus 
										      		   ipsum primis augue ultrice ligula egestas suscipit lectus gestas integer
										      		   congue a lectus porta phasellus neque blandit tristique
													</p> 

													
										      		<p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas 
										      		   and magna ipsum vitae
													</p>

												</div>

											</div>


										</div>	


									</li>	


								</ul>
							</div>
							<div class="more-questions">
								<div class="more-questions-txt bg--white-400 r-100">
									<p class="p-lg">Have any questions? <a href="contacts.html" class="color--theme">Get in Touch</a></p>
								</div>
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
        </>
     );
}
 
export default FAQ;