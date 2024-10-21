var metinselIfade = "Gitti";
        var sayisalIfade = 5;
        var mantiksalIfade = true;
        var objectIfade = {};
        var arrayIfade =[];
        var bosBirSey;
        //tip günvnli değil unutma bunun için type script çıktı.
        console.log(typeof(metinselIfade));
        console.log(typeof(sayisalIfade));
        console.log(typeof(mantiksalIfade));
        console.log(typeof(objectIfade));
        console.log(typeof(arrayIfade));
        // conosle.log(typeof(bosBirSey));
        // conosle.log(typeof(yokBirSey));

        var mesaj = "log yazdım";
        let sayi1 = 15;
        // let sayi ;

        const pi = 3.14;
        {
            console.log(sayi1);
            let sayi = 10;

            {
                console.log(sayi);
                let sayi2 =20;
                console.log(sayi2);
            }

            console.log(sayi);
            // console.log(sayi2);
        }

        function ClickMe()
        {

            var mesaj = "Log yazdım fonksiyon içinde";
            let sayi = 5;
            // alert('Tıklandım.'); 
            console.log(mesaj);
            console.log(sayi)
        }

        console.log(pi);
        //pi= 5;
        //console.log(pi);

        // console.log(sayi);

        //! bu dikkat öemli 
        //? bu information
        //*information highlight
        //todo yapılacaklar
        /* çok satılır yorum  */

        function topla(sayi1, sayi2)
        {
            return sayi1+sayi2
        }

        console.log(topla(6,8)) ;
        var sonuc=topla(6,8);

        alert("kullanıcıya biruyarı mesajjı")

        /* kullacıya onay mesajı */
        var cevap= confirm("bunu yapmak istiyor musun");

        console.log(cevap);

       var yas = prompt("lütfen yaşınızı giriniz"," 0");

       console.log(yas);
       console.log(typeof(yas));

       var yasNumber= parseInt(yas);

       console.log(yasNumber);
       console.log(typeof(yasNumber));

       //console.log("bu bir log");
       //console.info("bu bir info");
       //console.warn("bu bir warn");
      // console.error("bu bir error");

       //renkli uyaı vermek istersek windows+ş ile emojilere ulaşabilirsin
       console.log("%cbu bir log ❤️❤️😍", "color:orange; font-size:32px; background-color:black;");

       //ARİTMETİK İŞLEMLER
       var sonuc1=5+6;
       var sonuc2=5-6;
       var sonuc3=5*6;
       var sonuc4=5/6;
       var sonuc5=5%6;

       console.log(sonuc1 + " " + sonuc2 + " " + sonuc3 + " " + sonuc4 + " " + sonuc5);
       //console.log(sonuc1);
       //console.log(sonuc2);
       //console.log(sonuc3);
       //console.log(sonuc4);
       //console.log(sonuc5);

       var num1=prompt("lütfen 1. sayıyı giriniz, 0 ");
       var num2=prompt("lütfen 2. sayıyı giriniz, 0 ");

       var result = parseInt(num1)  +parseInt(num2) ;

       if (result %2==0) 
        {
            console.log("sonuç çifttir");
        }
        else if (result %2==1) 
        {
           console.log("sonuç tektir");
        }

        var adet= prompt("lütfen kaç adet tişort istiyrsunuz, 0");
        for (let index = 1; index <= adet; index++) 
            {
                var tişort=prompt(index+"tişort için renk belirleyiniz(kırmızı, mavi, yeşil),", "kırmızı");
                if(tişort=="kırmızı") 
                    { 
                        alert(index + ". tişortünüz " +tişort+ " renkti.fiyatı 100");
                        console.log(index + ". tişortünüz " +tişort+ " renkti.fiyatı 100");
                    }
                else if(tişort=="mavi")
                {
                    alert(index + ". tişortünüz " +tişort+ " renkti.fiyatı 200");
                    console.log(index + ". tişortünüz " +tişort+ " renkti.fiyatı 200");
                }
                else if(tişort=="yeşil")
                    {
                        alert(index + ". tişortünüz " +tişort+ " renkti.fiyatı 300");
                        console.log(index + ". tişortünüz " +tişort+ " renkti.fiyatı 300");
                    }

                else 
                {
                    var varsayilanrenkolsunmu=confirm("seçilen rnk yok default olsun mu ")
                    if(varsayilanrenkolsunmu)
                        {
                            tişort="kırmızı"
                            alert(index + ". tişortünüz " +tişort+ " renkti.fiyatı 100");
                            console.log(index + ". tişortünüz " +tişort+ " renkti.fiyatı 100");
                        }
                        else
                        {
                            alert(index + "tişotünüz için yeniden renk seçiniz");
                            index--;
                        }
                    
                }
            }