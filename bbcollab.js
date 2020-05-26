/* Base Configuration Variables */

/* Configurate your Main-RoomId here */
const bbcollabBaseUrl = 'https://eu.bbcollab.com/guest/[ROOMID]';

/* RocketChat Phone-Icon: Replace this with desired SVG */
const bbcollabSymbol = `
<symbol id="icon-bbcollab" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6778 13.8315C20.373 14.1727 20.9373 14.9646 20.7506 15.9018C20.5593 16.8626 20.0759 18.1027 19.2595 19.0146C18.8437 19.4791 18.3082 19.895 17.6434 20.1102C16.9615 20.331 16.2147 20.3169 15.4442 20.0268C14.014 19.4884 12.4994 18.5009 11.2677 17.5778C10.2959 16.8494 9.45427 16.1261 8.90869 15.6204L8.88839 15.6163C8.83438 15.5623 8.77441 15.5009 8.70915 15.4327C8.64104 15.3676 8.57975 15.3077 8.5258 15.2537L8.52167 15.2334C8.01604 14.6879 7.2927 13.8463 6.56436 12.8745C5.64119 11.6427 4.65368 10.1281 4.1153 8.69791C3.82525 7.9274 3.81115 7.18059 4.0319 6.49877C4.24715 5.83394 4.66305 5.29839 5.12746 4.88265C6.03944 4.06626 7.27955 3.58283 8.24029 3.39149C9.17751 3.20484 9.96945 3.76911 10.3106 4.4643L11.6384 7.17003C12.0333 7.97481 11.8306 8.84495 11.397 9.43317C11.2857 9.58409 11.1964 9.72824 11.1403 9.84855C11.1279 9.87508 11.1183 9.89793 11.111 9.91715C11.1242 9.94287 11.1425 9.97648 11.1676 10.0186C11.2644 10.1811 11.4104 10.3851 11.5918 10.6133C11.7701 10.8375 12.1442 11.2426 12.5119 11.63C12.8994 11.9978 13.3046 12.372 13.5289 12.5503C13.757 12.7317 13.961 12.8777 14.1236 12.9745C14.1656 12.9996 14.1992 13.0179 14.225 13.0311C14.2442 13.0238 14.267 13.0142 14.2936 13.0018C14.4139 12.9457 14.558 12.8564 14.7089 12.7452C15.2972 12.3115 16.1673 12.1088 16.9721 12.5037L19.6778 13.8315ZM11.0598 13.082C11.1237 13.1482 11.184 13.2095 11.2396 13.2651L11.2766 13.2882C11.5674 13.5602 11.9153 13.8685 12.2643 14.146C12.5284 14.356 12.8132 14.5646 13.0872 14.7279C13.316 14.8643 13.699 15.0712 14.1144 15.0917C14.5292 15.1121 14.9043 14.9785 15.1693 14.8548C15.4507 14.7235 15.7129 14.5531 15.9297 14.3932C15.9769 14.3584 16.0235 14.3423 16.0554 14.3379C16.072 14.3356 16.0807 14.3367 16.0839 14.3374L18.7159 15.629C18.5566 16.3138 18.2095 17.1121 17.7323 17.6452C17.4846 17.9219 17.2363 18.0892 17.0006 18.1656C16.7818 18.2364 16.5113 18.2504 16.1514 18.115C14.996 17.68 13.667 16.8316 12.4853 15.9458C11.767 15.4075 10.8577 14.6035 10.1709 13.9711C9.5385 13.2843 8.73461 12.3751 8.19626 11.6568C7.31055 10.4751 6.46209 9.14607 6.02716 7.99067C5.89169 7.63082 5.90572 7.36031 5.97655 7.14154C6.05288 6.90578 6.22021 6.6575 6.49686 6.40984C7.03 5.93259 7.82826 5.5855 8.51313 5.42624L9.80469 8.0582C9.80541 8.06141 9.80651 8.07016 9.80421 8.08672C9.79979 8.11858 9.78369 8.16521 9.7489 8.21238C9.589 8.42926 9.41864 8.69138 9.28728 8.97284C9.16361 9.23784 9.02998 9.61292 9.05042 10.0277C9.0709 10.4431 9.27781 10.8261 9.41422 11.055C9.5775 11.3289 9.78609 11.6137 9.99607 11.8778C10.2736 12.2268 10.582 12.5748 10.854 12.8656L10.877 12.9025C10.9325 12.958 10.9938 13.0182 11.0598 13.082Z"></path>
</symbol>
`;

/* Description-Text on Hover: Customize this for different languages */
const bbcollabText = {
		'en': 'Open Video-Conference Room',
		'de': 'Öffne Video-Konferenz Raum',
		'fr': 'Open Video-Conference Room',
		'es': 'Open Video-Conference Room',
		'it': 'Open Video-Conference Room',
		'nl': 'Open Video-Conference Room',
		'pl': 'Open Video-Conference Room',
		'pt': 'Open Video-Conference Room',
		'ru': 'Смена оформления'
}[defaultUserLanguage()];



/* Main Function */
function addBbcollabButton() {
	const buttonBbcollab = `
	<button class="sidebar__toolbar-button rc-tooltip rc-tooltip--down js-button" aria-label="${bbcollabText}">
		<svg class="rc-icon sidebar__toolbar-button-icon sidebar__toolbar-button-icon--bbcollab" aria-hidden="true" viewBox="0 0 468 468">
			<use xlink:href="#icon-bbcollab"></use>
			${bbcollabSymbol}
		</svg>
	</button>`;

	const sidebarToolbar = $('.sidebar__toolbar');

	// wait for the sidebar toolbar to be visible
	if(!sidebarToolbar.is(':visible')) {
			setTimeout(addBbcollabButton, 250);
			return;
	}

	var BbcollabButton = $(`.js-button[aria-label="${bbcollabText}"]`);

	// do nothing if button is already on the screen
	if (BbcollabButton.is(':visible')) {
			return;
	}

	BbcollabButton = $(buttonBbcollab).prependTo(sidebarToolbar);

	BbcollabButton.on('click', function() {
		var bbcollabUrl = bbcollabBaseUrl;
		var forename = '',
			surename = '',
			guestName = '';

		function getCookieValue(name) {
			const value = `; ${document.cookie}`;
			const parts = value.split(`; ${name}=`);
			if (parts.length === 2) return parts.pop().split(';').shift();
		}

		// Query /me REST-Endpoint to get User-Information
		$.ajax (
			{
				type: "GET",
				url: "/api/v1/me",
				dataType: 'json',
				headers: {
					"X-Auth-Token": getCookieValue('rc_token'),
					"X-User-Id": getCookieValue('rc_uid')
				},
				data: null,
				success: function (response){
					// Sanitize name
					guestName = encodeURI(response.name).replace(/\+/g, '').replace(/\s+/g, '+');
					if (!guestName) guestName = encodeURI(response.username);
					if (guestName) bbcollabUrl += '?guestName='+guestName;

					// Open BBCollab Link in new Tab
					var win = window.open(bbcollabUrl, '_blank');
					win.focus();
				}
			}
		);

	});
}

$(addBbcollabButton);
