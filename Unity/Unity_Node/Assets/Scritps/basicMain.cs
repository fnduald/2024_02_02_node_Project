using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class basicMain : MonoBehaviour
{
    public Button Hello;
    public string host;
    public int port;
    public string route;
    private IEnumerator GetBasic(string url, System.Action<string> callback)
    {
        var webRequset = UnityWebRequest.Get(url);
        yield return webRequset.SendWebRequest();
        if (webRequset.result == UnityWebRequest.Result.ConnectionError
            || webRequset.result == UnityWebRequest.Result.ProtocolError)
        {
            Debug.Log("네크워크 환경이 좋지 않아서 통신 불가");
        }
        else
        {
            callback(webRequset.downloadHandler.text);
        }
    }
             
    


    
    private void Start()
    {
            this.Hello.onClick.AddListener(() =>
                {
                    var url = string.Format("{0}:{1}/{2}", host, port,route);
                    Debug.Log(url);
                    StartCoroutine(this.GetBasic(url, (raw) =>
                    {
                        Debug.LogFormat("{0}",raw);
                    }));
                });
        }

    
                
                
                
                
                
                
                
                }
    

