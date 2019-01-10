class FirebaseService {
    trackSwitch = (firebase, onChange) => {
        var switchRef = firebase.database().ref("switch/");
        switchRef.on("value", snapshot => {
            onChange(
                snapshot.val().switchValue,
                snapshot.val().lastSwitchOnDate,
                snapshot.val().record
            );
        });
    };
}

export default new FirebaseService();
