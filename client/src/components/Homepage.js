import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container } from 'react-bootstrap';
import Footer from './Footer';
import AboutPage from './AboutPage';
import AboutPage2 from './AboutPage2';
import ContactSection from './ContactSection';
import '../../src/css/LandingPage.css';
import TopNavHp from './TopNavHp';
import CovidMain from './CovidMain';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';

const Homepage = ({ getCurrentProfile, auth, profile }) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	return (
		<body>
			<div id="LandingPage">
				<Jumbotron fluid>
					<Container className="lp-covid-jumbo">
						<CovidMain />
					</Container>
				</Jumbotron>
				<div className="lp-container">
					<TopNavHp />
				</div>
			</div>
			<div>
				<AboutPage />
				<AboutPage2 />
				<ContactSection />
				<Footer />
			</div>
		</body>
	);
};

Homepage.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Homepage);
