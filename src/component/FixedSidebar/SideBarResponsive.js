import React from 'react';

export default function SideBarResponsive() {
    return (
        <div className="fixed-sidebar fixed-sidebar-responsive">

	<div className="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
		<a href="#" className="logo js-sidebar-open">
			<img src="img/logo.png" alt="Olympus"/>
		</a>

	</div>

	<div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
		<a href="#" className="logo">
			<div className="img-wrap">
				<img src="img/logo.png" alt="Olympus"/>
			</div>
			<div className="title-block">
				<h6 className="logo-title">olympus</h6>
			</div>
		</a>

		<div className="mCustomScrollbar" data-mcs-theme="dark">

			<div className="control-block">
				<div className="author-page author vcard inline-items">
					<div className="author-thumb">
						<img alt="author" src="img/author-page.jpg" className="avatar"/>
						<span className="icon-status online"></span>
					</div>
					<a href="02-ProfilePage.html" className="author-name fn">
						<div className="author-title">
							James Spiegel 
						</div>
						<span className="author-subtitle">SPACE COWBOY</span>
					</a>
				</div>
			</div>

			<div className="ui-block-title ui-block-title-small">
				<h6 className="title">MAIN SECTIONS</h6>
			</div>

			<ul className="left-menu">
				<li>
					<a href="#" className="js-sidebar-open">
						<span className="left-menu-title">Collapse Menu</span>
					</a>
				</li>
				<li>
					<a href="mobile-index.html">
						<span className="left-menu-title">Newsfeed</span>
					</a>
				</li>
				<li>
					<a href="Mobile-28-YourAccount-PersonalInformation.html">
						<span className="left-menu-title">Fav Pages Feed</span>
					</a>
				</li>
				<li>
					<a href="mobile-29-YourAccount-AccountSettings.html">
						<span className="left-menu-title">Friend Groups</span>
					</a>
				</li>
				<li>
					<a href="Mobile-30-YourAccount-ChangePassword.html">
						<span className="left-menu-title">Music & Playlists</span>
					</a>
				</li>
				<li>
					<a href="Mobile-31-YourAccount-HobbiesAndInterests.html">
						<span className="left-menu-title">Weather App</span>
					</a>
				</li>
				<li>
					<a href="Mobile-32-YourAccount-EducationAndEmployement.html">
						<span className="left-menu-title">Calendar and Events</span>
					</a>
				</li>
				<li>
					<a href="Mobile-33-YourAccount-Notifications.html">
						<span className="left-menu-title">Community Badges</span>
					</a>
				</li>
				<li>
					<a href="Mobile-34-YourAccount-ChatMessages.html">
						<span className="left-menu-title">Friends Birthdays</span>
					</a>
				</li>
				<li>
					<a href="Mobile-35-YourAccount-FriendsRequests.html">
						<span className="left-menu-title">Account Stats</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span className="left-menu-title">Manage Widgets</span>
					</a>
				</li>
			</ul>

			<div className="ui-block-title ui-block-title-small">
				<h6 className="title">YOUR ACCOUNT</h6>
			</div>

			<ul className="account-settings">
				<li>
					<a href="#">


						<span>Profile Settings</span>
					</a>
				</li>
				<li>
					<a href="#">

						<span>Create Fav Page</span>
					</a>
				</li>
				<li>
					<a href="#">

						<span>Log Out</span>
					</a>
				</li>
			</ul>

			<div className="ui-block-title ui-block-title-small">
				<h6 className="title">About Olympus</h6>
			</div>

			<ul className="about-olympus">
				<li>
					<a href="#">
						<span>Terms and Conditions</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span>FAQs</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span>Careers</span>
					</a>
				</li>
				<li>
					<a href="#">
						<span>Contact</span>
					</a>
				</li>
			</ul>

		</div>
	</div>
</div>
    )
}