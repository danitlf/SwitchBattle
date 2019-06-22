using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using System;

public class UIController : MonoBehaviour
{
    public GameObject tankButton;
    public Text timerText;
    public Text recordText;

    private DateTime lastSwitchOnDate;
    private TimeSpan recordDate;
    private double timer;
    private Animator tankButtonAnimator;

    private void Start()
    {
        SetTankSettings();
    }

    private void Update()
    {
        if (timerText != null)
        {
            timer += Time.deltaTime;
        }
    }

    private void OnGUI()
    {
        double hour = Math.Floor(timer / 3600);
        double minutes = Math.Floor((timer / 60) % 60);
        double seconds = Math.Round(timer % 60) % 60;

        timerText.text = string.Format("{0:00}:{1:00}:{2:00}", hour, minutes, seconds);
    }

    private void SetTankSettings()
    {
        if(tankButton != null)
        {
            tankButtonAnimator = tankButton.GetComponent<Animator>();
        }
    }

    public void onRankingClick()
    {
        SceneManager.LoadScene("RankingScene");
    }

    public void onGameClick()
    {
        SceneManager.LoadScene("MainScene");
    }

    public void onTankClick()
    {
        // put switch to left
        bool isLeft = tankButtonAnimator.GetBool("isLeft");
        tankButtonAnimator.SetBool("isLeft", !isLeft);

        // record boolean switch
        ConfigFirebase.SetSwitchValue(isLeft);

        //// set new record if exists
        //double differenceLastSwitchOnNow = (lastSwitchOnDate - DateTime.Now).Negate().TotalSeconds;
        //TimeSpan newRecord = TimeSpan.FromSeconds(differenceLastSwitchOnNow > recordDate.TotalSeconds ? differenceLastSwitchOnNow : recordDate.TotalSeconds);
        //SetRecordDate(newRecord);

        //// set lastswitch to new Date
        //SetCurrentTime(new DateTime());
    }

    public void SetRecordDate(TimeSpan recordDate)
    {
        this.recordDate = recordDate;
        double totalSeconds = Math.Abs(recordDate.TotalSeconds);
        recordText.text = string.Format("{0:00}:{1:00}:{2:00}", Math.Floor(totalSeconds / 3600), Math.Floor((totalSeconds / 60) % 60), Math.Round(totalSeconds % 60));
    }

    public void SetCurrentTime(DateTime lastSwitchOnDate)
    {
        this.lastSwitchOnDate = lastSwitchOnDate;
        timer = Math.Abs((lastSwitchOnDate - DateTime.Now).TotalSeconds);
    }

    public void SetSwitchValue(bool switchValue)
    {
        tankButtonAnimator.SetBool("isLeft", switchValue);
    }
}
