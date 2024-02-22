import { fv } from "./fuggveny.js";

//console.log(fv(5));

//var szam = 12; /* globális/ fájl szintű változó*/
//var a = 111111;

//console.log(szam);

function fv1(){
    var szam;
    szam += 2; //NaN
    /*"var"-ral deklarált változó hatóköre lehet globális/fájl szintű vagy lokális/függvény szintű 
    var változó esetén is működik a hoisting azaz deklarációkor úgy működik, mintha  ahatóköre tetején hoztuk volna létre.
    ha a deklarációkor nem adunk neki értéket akkor automatikusan az "undefined" értéket kapja*/
    console.log(szam); /* undefined! nem hibaüzenet */
    szam = 24; /* lokális/ függvény szintű változó (A függvényen kívül nem értelmezhető)*/
    var szam2 = 34;
    console.log(szam2);
    console.log(a);
}

//fv1();
//console.log(szam2);
//console.log(szam);

let szam = 12;
function fv2(){
    let szam2 = 24;
    console.log(szam2);
    {
        let szam2 = 33; /*a let hatóköre blokk szintű */
        /*let-teldeklarált változó lehet globális/fájl szintű vagy lokális/blokk szintű (kapcsos zárojelek között)*/
        console.log(szam2);
    }
    console.log(szam2);
    console.log(szam);
}

//fv2();
//console.log(szam);
//console.log(szam2);


for (let index = 0; index < 3; index++) {
    console.log(index);
}

//console.log(index); /* hibaüzenetet kapunk */

const NEV = "Béla"; /* const-tal deklarált változók értéke később nem változtatható meg, és deklaráláskor kötelező értéket adni neki!
hatókör szempontjából ugyanolyan, mint a let. szokás a const-tal definiált változókat nagybetűvel írni */
//nev = "Jenő"; /* hibaüzenet */

/* ---- lista ---- */
/* azonos típusú adatokat tárolhatunk egy tömbben és egy listában ( (összetett) adatszerkezet ).
minden elemnek van egy index-e. a tömbnek előre megadjuk a méretet.*/

let lista = ["első", "második", "harmadik"];
console.log(lista); /* lista kiírása */
console.log(lista[0]); /* lista elemének kiírása */
console.log(lista.length) /* lista hossza */

lista[10] = "tizenegyedik"; /* a lista x-edik helyére beteszi az adott elemet. */

console.log(lista);
console.log(lista[5]);

lista.push("következő elem"); /* a lista utolsó eleme után beteszi az adott elemet */
console.log(lista);

lista.pop(); /* eltávolitja a lista utolsó elemét */
console.log(lista);

lista = ["a", "b", "c"] /* felül írjuk a list tartalmát */
console.log(lista);

const lista2 = [11, 12, 13, 14];
//lista2 = [23, 24, 25]; /* const-hoz nem lehet új értéket rendelni!!! */

lista2[0] = 1111111;
lista2.push(2222222);
/* konstans lista esetén a lista memóriában elfoglalt helye fix (a memória címe nem változtatható meg) viszont az értékei megváltoztathatók.
modósithatjuk adott index helyen lévő értékeket, hozzáfűzhetünk újabb elemeket, eltávolíthatjuk akár az összes elemet is, de a címe fix marad. */
console.log(lista2);

/* név, telefonszám, kor */
/* ---- objektumok ---- */
const SZEMELY1 = {
    nev: "Gabi",
    tel: "06-30-5532345",
    kor:12
}
/* js objektum egy olyan összetett adatszerkezet, ami összetartozó adatokat kezel egybe, tulajdonság értékpárokból áll,
a kulcsok jelentik az adott objektum tulajdonságait, az értékek pedig a hozzátartozó értékeket. kapcsos zárójelek közé írjuk. 
konstansnál úgy működik, mint a lista*/

/* JSON */
console.log(SZEMELY1.nev);
SZEMELY1.barat = true;
console.log(SZEMELY1);

const SZEMELY2 = {
    nev: "Béla",
    tel: "06-30-5532345",
    kor:30,
    barat: false
}

const SZEMELYLISTA = [
    {
        nev: "Gabi",
        tel: "06-30-5532345",
        kor:12,
        barat: true

    },
    {
        nev: "Béla",
        tel: "06-30-5532345",
        kor:30,
        barat: false
    }
]

/* Gabi kora */

console.log(SZEMELYLISTA[0].kor)