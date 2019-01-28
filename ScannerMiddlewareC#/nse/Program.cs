using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Windows.Forms;
using System.Text;
using System.Timers;
using System.IO;
using zkemkeeper;
using System.Threading;
using System.Web.Script.Serialization;
using System.Net.Http;
using System.Net;

namespace nse
{
    class Program 
    {
        
        static void Main(string[] args)
        {
             
                Thread createComAndMessagePumpThread = new Thread(() =>
                {

                    bool connSatus;
                    CZKEM axCZKEM1 = new CZKEM();
                    connSatus = axCZKEM1.Connect_Net("192.168.10.80", 4370);

                   if (connSatus == true)
                    {
                       
                        axCZKEM1.OnAttTransactionEx -= new _IZKEMEvents_OnAttTransactionExEventHandler(axCZKEM1_OnAttTransactionEx);

                        if (axCZKEM1.RegEvent(1, 1))
                        {

                            axCZKEM1.OnAttTransactionEx += new _IZKEMEvents_OnAttTransactionExEventHandler(axCZKEM1_OnAttTransactionEx);
                            System.Console.WriteLine("conectado");

                        }
                    }
                    Application.Run();


                });
                createComAndMessagePumpThread.SetApartmentState(ApartmentState.STA);

                createComAndMessagePumpThread.Start();


            
             void axCZKEM1_OnAttTransactionEx(string EnrollNumber, int IsInValid, int AttState, int VerifyMethod, int Year, int Month, int Day, int Hour, int Minute, int Second, int WorkCode)
            {

                string time = Year + "-" + Month + "-" + Day + " " + Hour + ":" + Minute + ":" + Second;


                //Datos
                ICollection<UserInfo> hola = new List<UserInfo>();
                UserInfo fpInfo = new UserInfo();

                fpInfo.ID = EnrollNumber;
                fpInfo.date = time;
                hola.Add(fpInfo);


                //JSON
                JavaScriptSerializer jser = new JavaScriptSerializer();
                string archivo = jser.Serialize(hola);
                File.WriteAllText("data.json", archivo);



                HttpWebRequest request = WebRequest.Create("http://localhost:3000/registros/") as HttpWebRequest;
                request.ContentType = "application/json";
                request.Method = "POST";



                using (var streamWriter = new StreamWriter(request.GetRequestStream()))
                {


                    streamWriter.Write(archivo);
                    streamWriter.Flush();
                    streamWriter.Close();
                }
                HttpWebResponse response = request.GetResponse() as HttpWebResponse;
                Stream stream = response.GetResponseStream();

                string json1 = "";

                using (StreamReader reader = new StreamReader(stream))
                {
                    while (!reader.EndOfStream)
                    {
                        json1 += reader.ReadLine();
                    }
                }

                System.Console.WriteLine(json1);
                System.Console.WriteLine("hecho");
            
            }


        }
    }
    public class UserInfo
    {

        public string ID{ get; set; }
        public string date { get; set; }
    }

 }
