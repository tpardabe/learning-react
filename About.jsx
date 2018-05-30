import React from 'react';

class About extends React.Component {
	render() {
		//todo: describe myself
		const linkedInLink = 'https:\/\/www.linkedin.com';
		const githubLink = 'https:\/\/github.com\/tpardabe';
		return (
			<div class="outer">
				<div class="middle">
					<div class="inner">
						<h2>Talgat Pardabekov</h2>
						<h4>Back end Software Engineer</h4>
						<div>Purdue University Alumni</div>
						<ul class="list-inline">
							<li><a href={linkedInLink} class="fa fa-linkedin-square" id="link"/></li>
							<li><a href={githubLink} class="fa fa-git-square" id="link"/></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default About;