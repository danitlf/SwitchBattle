using System.Collections;
using System.Collections.Generic;
using UnityEngine;

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
        tankButtonAnimator = tankButton.GetComponent<Animator>();
    }

    public void onRankingClick()
    {
        Debug.Log("RankingClick");
    }

    public void onTankClick()
    {
        bool isLeft = tankButtonAnimator.GetBool("isLeft");

        tankButtonAnimator.SetBool("isLeft", !isLeft);
    }
}
