# Angular Domaci 10

1. Postoje 2 promenljive:
   broj: number = 5.57;
   broj2: number = 798.551949;

Prikazati obe promenljive u html-u, koristeći number pipe, i isto pravilo u oba prikaza, tako da se dobije sledeći output.
05.570 i 798.55195

2. Napraviti pipe arrToStr.
   Pipe očekuje da mu se prosledi niz usera (svaki ima firstName, lastName i id), a on vraća string gde su korisnici odvojeni zarezima i razmakom.

Npr za prosleđen niz:
[
{
id: 1,
firstName: "Pera",
lastName: "Peric"
},
{
id: 2,
firstName: "Mika",
lastName: "Mikic"
},
{
id: 3,
firstName: "Laza",
lastName: "Lazic"
}
]

u html-u se treba prikazati (bez zareza na kraju):

Pera Peric, Mika Mikic, Laza Lazic

Ne koristiti ngFor u html-u, nego niz proslediti pipe-u, a sve ostalo pipe treba da odradi.
