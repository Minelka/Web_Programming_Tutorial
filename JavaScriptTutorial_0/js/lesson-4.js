//object tanımlama

var batuhan= 
{
    memleket: "Nevşehir",
    tuttuguTakım : "Galatasaray",
    arabasiVarMi : true,
    arabasi : 
    {
        marka : "Skoda",
        model : "Superb",
        yil : 2022,
        km: 31750,
        Renk : "Indigo"
    },
    dogumTarihi : new Date (2000, 0, 20),
    dogumTarihiStr : new Date (2000, 0, 20).toLocaleDateString(),
    medeniDurumu : "Bekar",
    hobileri : [
        {
            adi : "Kitap Okumak",
            sure : 5
        },
        {
            adi : "Gitar Çalmak",
            sure : 10
        },
        {
            adi : "Go Kart",
            sure : 3
        },
    ],
    notlar : [75, 98, 100],

    notOrtlama : function() 
    {
        //reducu call beck fonksiyon var tüm notları dolaşarak yeni gelen değere göre istediğimiz işlemi verebiiyor.
        var toplamNotlar = this.notlar.reduce((toplam, anlikDeger) =>
        {
            return toplam+anlikDeger;
        });

        var notSayisi = this.notlar.length;

        return toplamNotlar/notSayisi;
    }
};

console.log(batuhan.arabasiVarMi);
console.log(batuhan.arabasi.marka);


//indexle direk yazmak arrayden çekiyoruz
console.log(batuhan.hobileri[1].adi);

batuhan.hobileri.forEach((hobi,i) =>
{
    console.log(`${i+1}. ${hobi.adi} ${hobi.sure} yıldır.`);
});

//yukartıdakiyle aynı sonucu verir. c# tan farklı olarak burada index te alınabiliyo. parametrelerdeki i inexe eşittir.

batuhan.hobileri.forEach(function(hobi,i){console.log(`${i+1}. ${hobi.adi} ${hobi.sure} yıldır.`);})

console.log(batuhan.notOrtlama());

//ödev araştırma : 0.2 +0.2 =0.4
//0.1+0.1=0.2
//0.1+0.2=0.3 yaptığında 0.3000000000000004 ediyor niye
//JavaScript ve diğer bazı programlama dillerinde, 
//ondalık sayıların temsilinde ve hesaplamalarda meydana 
//gelen hatalar, sayıları ikili (binary) sistemde depolamaktan kaynaklanır.
//let result = 0.1 + 0.2;
//console.log(Math.round(result * 10) / 10); // 0.3

//CLASS TANIMI
function Kisi(adi, soyadi, yas) 
{
    this.adi = adi;
    this.soyadi= soyadi;
    this.yas= yas;
}

console.log(typeof(Kisi));

var yeniKisi= new Kisi("göksel", "kalyoncu", 35);
console.log(batuhan);
console.log(yeniKisi);

class Kitap 
{
   constructor(yazarAdi, yazarSoyadi, kitapAdi, sayfaSayisi)
   {
    this.yazarAdi=yazarAdi;
    this.yazarSoyadi=yazarSoyadi;
    this.kitapAdi=kitapAdi;
    this.sayfaSayisi=sayfaSayisi;
   }

   YazarAdiSoyadi=function() 
   {
        return this.yazarAdi + " " + this.yazarSoyadi;
   }

   YazarAdiSoyadiArrowFunc=() =>
   {
        return this.yazarAdi + " " + this.yazarSoyadi;
   }

   YazarAdiSoyadiArrowFuncSort= ()=> this.yazarAdi+ " " + this.yazarSoyadi;


};

console.log(typeof(Kitap));
var yeniKitap=new Kitap("göksel", "kalyoncu", "Kim korkar c#tan", 123);

console.log(yeniKitap);
console.log(yeniKitap.kitapAdi);
console.log(yeniKitap.yazarAdi);

console.log(yeniKitap.YazarAdiSoyadi());
console.log(yeniKitap.YazarAdiSoyadiArrowFunc());
console.log(yeniKitap.YazarAdiSoyadiArrowFuncSort());

var sayHello = function() 
{
    console.log("hello javascript variable function");
}

sayHello();

var toplama = (a,b) => a+b;
var çarpma = (a,b) => a*b;
var bolme = (a,b) => a/b;
var cıkarma = (a,b) => a-b;
//buradaki nums params gibidir.
var ortlama =function(...nums) 
{
    var toplam= nums.reduce((p,c)=>p+c);
    return bolme(toplam, nums.length);
}

console.log(toplama(5,3)); 
console.log(çarpma(5,3)); 
console.log(bolme(5,3));
console.log(cıkarma(5,3)); 

console.log(ortlama(3,5,7,8,10));

class Hayvan 
{
    /**
     *@adi string name of animal
     *super vardı bunun içinde super sayesinde çoklu kaltım alabiliyor
     */
    constructor(adi) 
    {
        this.Adi= adi;
    }
    AdinNedir() 
    {
        return this.Adi;
    }
}

class Kedi extends Hayvan 
{
    /**
     *
     */
    constructor(adi,cinsi) {
        super(adi);
        this.Cinsi=cinsi;
    }

    CinsinNedir() 
    {
        return this.Cinsi;
    }

    SenKimsin() 
    {
        return "I am a cat my name is " +this.Adi+ " and type of " +  this.Cinsi
    }
}

var hayvan = new Hayvan();
var blackWhiteCat = new Kedi("Black White", "Sokak Kedi", );

console.log(blackWhiteCat.AdinNedir());
console.log(blackWhiteCat.CinsinNedir());
console.log(blackWhiteCat.SenKimsin());

console.log("-".repeat(10));

console.log(JSON.stringify(yeniKisi));
console.log(JSON.stringify(yeniKitap));
console.log(JSON.stringify(batuhan));

console.log("-".repeat(10));
 
var kisiJsonStr = JSON.stringify(yeniKisi);
 
console.log(kisiJsonStr);
 
var jsonKisiClass = JSON.parse(kisiJsonStr);
 
console.log(jsonKisiClass);
 
 
console.log("-".repeat(10));
 
var batuJson = JSON.stringify(batuhan);
 
console.log(batuJson);
 
var batuObject = JSON.parse(batuJson);
 
console.log(batuObject);





