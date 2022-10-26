/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
	apiKey: 'AIzaSyBRcvfL-L-dFDMiY7aC_PsxltJ30wJy_bE',
	authDomain: 'friendlychat-d1b1a.firebaseapp.com',
	projectId: 'friendlychat-d1b1a',
	storageBucket: 'friendlychat-d1b1a.appspot.com',
	messagingSenderId: '802083184973',
	appId: '1:802083184973:web:c7a904d8cec622a2621704',
};

export function getFirebaseConfig() {
	if (!config || !config.apiKey) {
		throw new Error('No Firebase configuration object provided.' + '\n' + "Add your web app's configuration object to firebase-config.js");
	} else {
		return config;
	}
}
