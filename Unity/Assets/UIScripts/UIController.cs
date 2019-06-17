using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class UIController : MonoBehaviour
{
    public GameObject tankButton;
    public Text timerText;
    public Text recordText;

    private float timer = 3595;
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
        float hour = Mathf.Floor((timer / 3600) % 24);
        float minutes = Mathf.Floor((timer / 60) % 60);
        float seconds = Mathf.RoundToInt(timer % 60) % 60;

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
    }

    public void SetRecordText(string recordText)
    {
        this.recordText.text = recordText;
    }
}
