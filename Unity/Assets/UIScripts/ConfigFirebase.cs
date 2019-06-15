using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Firebase;
using Firebase.Unity.Editor;


public class ConfigFirebase : MonoBehaviour
{
    private void Start()
	{
		FirebaseApp.DefaultInstance.SetEditorDatabaseUrl("https://switchbattle-3a181.firebaseio.com");
	}
}
