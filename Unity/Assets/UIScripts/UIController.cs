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
        bool isLeft = tankButtonAnimator.GetBool("isLeft");
        tankButtonAnimator.SetBool("isLeft", !isLeft);

        ConfigFirebase.SetSwitchValue(isLeft);
    }

    public void SetRecordText(string recordText)
    {
        this.recordText.text = recordText;
    }

    public void SetCurrentTime(TimeSpan time)
    {
        timer = time.TotalSeconds;
    }

    public void SetSwitchValue(bool switchValue)
    {
        tankButtonAnimator.SetBool("isLeft", switchValue);
    }
}
