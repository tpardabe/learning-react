import React from 'react';

class About extends React.Component {
	render() {
		//todo: describe myself
		const linkedInLink = 'https:\/\/www.linkedin.com';
		const githubLink = 'https:\/\/github.com'
		return (
			<div class="outer">
				<div class="middle">
					<div class="inner">
						<div class="container">
							<h2>About</h2>
							<h4>Back end Software Engineer</h4>
							<ul class="list-inline">
								<li><a href={linkedInLink} class="fa fa-linkedin-square" id="link"/></li>
								<li><a href={githubLink} class="fa fa-git-square" id="link"/></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;