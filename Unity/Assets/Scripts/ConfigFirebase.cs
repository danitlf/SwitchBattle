using UnityEngine;
using Firebase;
using Firebase.Unity.Editor;
using Firebase.Database;
using System;
using System.Collections.Generic;

public class ConfigFirebase : MonoBehaviour
{
    private UIController uiController;

    private void Start()
	{
        uiController = FindObjectOfType<UIController>();

        FirebaseApp.DefaultInstance.SetEditorDatabaseUrl("https://switchbattle-3a181.firebaseio.com");

		FirebaseDatabase.DefaultInstance
            .GetReference("switch/")
            .ValueChanged += OnReferenceChange;
	}

    private void OnReferenceChange(object sender, ValueChangedEventArgs args)
    {
        if (args.DatabaseError != null)
        {
            Debug.LogError(args.DatabaseError.Message);
            return;
        }
        Dictionary<string, object> valueDict = (Dictionary<string, object>) args.Snapshot.Value;

        // get record time to set on UI
        int recordSeconds = int.Parse(valueDict["record"].ToString());
        TimeSpan recordDate = TimeSpan.FromSeconds(recordSeconds);
        uiController.SetRecordDate(recordDate);

        // set last switch time on timer
        string lastSwitchOnDate = valueDict["lastSwitchOnDate"].ToString();
        DateTime lastDate = DateTime.Parse(lastSwitchOnDate);
        uiController.SetCurrentTime(lastDate);

        // set switch value
        bool switchValue = valueDict["switchValue"].ToString() == "True";
        uiController.SetSwitchValue(!switchValue);
    }

    public static void SetSwitchValue(bool isOn)
    {
        FirebaseDatabase.DefaultInstance
            .GetReference("switch/switchValue")
            .SetValueAsync(isOn);
    }
}
