//array tanımı
var gunler=["pazartesi", "salı", "çarşamba", "perşembe", "cuma", "cumartesi", "pazar"];

console.log(gunler[0]);
console.log(gunler[2]);
console.log(gunler[4]);
console.log(gunler);
console.log(gunler.length);

for (let i = 0; i < gunler.length; i++) 
    {
        if(i%2==0)
            continue;

        console.log(gunler[i]); 
    }

console.log("--------------")

gunler.forEach(function(gun,index)
{
    if(index<5)
    console.log(index+ "ındex değeri=" +gun);
});

console.log("--------------")

for (let i = 0; i < gunler.length; i++) 
    {
        if(i>4)
            break;

        console.log(gunler[i]); 
    }

let sayac=1;

while(true) 
    {
        sayac++;
        if(sayac%32==25)
            break;
    }

while(sayac<10) 
    {
        console.log(sayac);
        sayac++;
        
    }

do
{
    console.log(sayac);
    sayac--;
}while(sayac>0)

var sayilar= new Array(5);

console.log("array lenght" + sayilar.length);

console.log(sayilar);

sayilar[0]=3;
sayilar[1]=5;
sayilar[2]=45;
sayilar[3]=1;
sayilar[4]=7;

console.log("array lenght" + sayilar.length);
console.log(sayilar);

sayilar[5]=9;
console.log("array lenght" + sayilar.length);
console.log(sayilar);

sayilar.push(39);
console.log("array lenght" + sayilar.length);
console.log(sayilar);

sayilar[10]=777;
console.log("array lenght" + sayilar.length);
console.log(sayilar);

//ilk sıraya yeni bir taneatar dier bütün sayları kaydırır.
sayilar.unshift(4);

console.log([7]);
console.log([8]);
console.log([11]);

sayilar[8]="altı";
sayilar[9]="beş";

//asci koda göre sıaralar çünkü tip güvenli olmadığı için
// arrayin içine her şeyi alabilir
console.log(sayilar.sort());

//sıralayabilmek için algoritma yazmak gerekir.
console.log(sayilar.sort(function(a,b) {return a-b}));

//yapılan değişikliği kabul edip devam ettiğini unutma 
//yapılan değişiklik kalıcı olur dikkat et
console.log (sayilar.reverse());

//son elemanı ver ve listeden siler
console.log(sayilar.pop());
console.log(sayilar.pop());
console.log(sayilar.pop());

//1,3,4 artık yok listeden sildiğimiz için yapılan 
//değişiklikte kalıcı olduğu iin lisateden gitti
console.log(sayilar);

console.log(sayilar.join('|'));
console.log(sayilar.toString());

console.log(sayilar);

var colors= "red | green | blue | yellow | black | white";
//split | bu çizgiye göre parçalara ayırır. bşka birişaret de olabilir
//sliceverilen aralık arasının alır
console.log(colors.split('|').slice(2,4));
console.log(colors.split('|'));

var arr1=[1,3,5,7];
var arr2= [2,4,6,8];

//concat ile iki array birbirine eklenir
var arr3=arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr3.sort(function(a,b){return a-b;}));

//alltakini sayfanın f12 kısmında yazdığında internet sayasının arka planını yeşil yapar.
//document.body.style.backgroundColor = "green";

