import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as moment from "moment";

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const trackLastSwitchOnDate = functions.database.ref("/switch/switchValue").onWrite((change, context) => admin.database().ref("/switch/lastSwitchOnDate").set(context.timestamp));

export const trackRecord = functions.database.ref("/switch/lastSwitchOnDate").onWrite((change, context) => {
	admin.database().ref("/switch/record").once('value').then((snapshotRecord)=>{
		const lastRecord = snapshotRecord.val() || 0;
		const lastSwitchOnDate = change.before.val() || new Date();

		let d = moment(context.timestamp).utc().diff(
			moment(lastSwitchOnDate).utc(),
			"seconds"
		);
		
		if (d > lastRecord)
			return admin.database().ref("/switch/record").set(d);
		else
			return Promise.resolve();
	});
});

