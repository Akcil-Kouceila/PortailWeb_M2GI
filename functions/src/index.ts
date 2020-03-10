import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

/*exports.triggerUserCreated = functions.auth.user().onCreate((user) => {
    return admin
      .firestore()
      .collection('/users/').doc(user.uid).set({
        email: user.email,
        img: '',
        nom: '',
        prenom: "",
        role: 'Client',
        tel: ''
      });
  });*/