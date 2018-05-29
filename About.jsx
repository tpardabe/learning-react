import React from 'react';

class About extends React.Component {
	render() {
		//todo: describe myself
		const linkedInLink = 'https:\/\/www.linkedin.com';
		const githubLink = 'https:\/\/github.com'
		return (
			<div class="outer">
				<div class="middle">
					<h2 class="inner">About</h2>
					<div class="inner">
						<ul class="list-inline">
							<li><a href={linkedInLink} class="fa fa-linkedin" /> </li>
							<li><a href={githubLink} class="fa fa-git" /></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default About;