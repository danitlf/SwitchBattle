using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class UIController : MonoBehaviour
{
    public GameObject tankButton;

    private Animator tankButtonAnimator;

    private void Start()
    {
        SetTankSettings();
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
}
