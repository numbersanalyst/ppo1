let code = [
`
// STRUKTURA
/*Ogólna postać

struct nazwa_struktury{
typ_pola1 nazwa_pola1;
typ_pola2 nazwa_pola2;
...
};
*/`,
`
struct Data {
    // Deklaracja pól struktury
    unsigned int d;
    unsigned int m;
    unsigned int r;
};

struct Pracownik {
    char imie[20];
    char nazwisko[20];
    int id;
    Data data_zatrudnienia;
} p1,p2; // Deklaracja zmiennych typu strukturowego

struct Uczen {
    char imie[20];
    char nazwisko[20];
    int klasa;
    char grupa;
    Data data_urodzenia;
};`,
`
strcpy_s(p1.imie, "Jan");
strcpy_s(p1.nazwisko, "Kowalski");
p1.data_zatrudnienia = { 1,1,2023 };
p1.data_zatrudnienia.d = 5;
        
cout << p1.imie << endl;
cout << p1.nazwisko << endl;
cout << "Data zatrudnienia: " << endl;
cout << p1.data_zatrudnienia.d << "." << p1.data_zatrudnienia.m << "." << p1.data_zatrudnienia.r << endl;
        
p2.id = 5;`,
`
#include <iostream>
#include <locale.h>

struct Data {
	unsigned int d;
	unsigned int m;
	unsigned int r;
};

struct Pracownik {
	char imie[20];
	char nazwisko[20];
	int id;
	Data data_zatrudnienia;
} p1,p2;

struct Uczen {
	char imie[20];
	char nazwisko[20];
	int klasa;
	char grupa;
	Data data_urodzenia;
};

using namespace std;

int main() {
    setlocale(LC_ALL, "pl_PL");

    strcpy_s(p1.imie, "Jan");
    strcpy_s(p1.nazwisko, "Kowalski");
    p1.data_zatrudnienia = { 1,1,2023 };
    p1.data_zatrudnienia.d = 5;
        
    cout << p1.imie << endl;
    cout << p1.nazwisko << endl;
    cout << "Data zatrudnienia: " << endl;
    cout << p1.data_zatrudnienia.d << "." << p1.data_zatrudnienia.m << "." << p1.data_zatrudnienia.r << endl;

    p2.id = 5;

    return 0;
}
`,
`
Jan
Kowalski
Data zatrudnienia:
5.1.2023`,
`
union nazwa{
	typ pierwszy_element;
	typ drugi_element;
	...
	typ n_ty_element;
};`,
`
int main()
{
	//tworzenie unii
	nazwa unia;
	
	//odwoływanie się do elementów
	unia.pierwszy_element = 0;
	
	return 0;
}`,
`
#include <iostream>
using namespace std;
 
union liczba{
        int calkowita;
        long long dluga;
        double rzeczywista;
};
 
int main()
{
    liczba a, b, c, d;

    //unia zajmuje 8 bajtów tyle ile największy typ unii - double
    cout<<"Unia zajmuje "<<sizeof(liczba)
    <<" bajtów"<<endl; 
        
    cout<<"Podaj trzy liczby całkowite: ";
       
    cin>>a.calkowita>>b.calkowita>>c.calkowita;
        
    d.rzeczywista = double(a.calkowita+b.calkowita+c.calkowita)/3.0;
        
    cout<<"Średnia wczytanych liczb wynosi: "<<d.rzeczywista<<endl;
        
    return 0;
}
`,
`
#include<iostream>
using namespace std;

union liczba{
	int calkowita;
	double rzeczywista;
};

struct samochod{
	char marka[20];
	char model[20];
	int rocznik;
	liczba pojemnosc;
};

int main()
{
	samochod renault;
	
	cout<<"Podaj markę: ";
	cin>>renault.marka; //odwołujemy się za pomocą operatora "."
	
	cout<<"Podaj pojemnosc: ";
	cin>>renault.pojemnosc.rzeczywista; //odwołujemy się za pomocą operatora "."
	
	//wypisanie danych
	cout<<"Marka: "<<renault.marka<<endl;
	cout<<"Pojemność: "<<renault.pojemnosc.rzeczywista<<endl;

	return 0;
}`
];

const pre = document.querySelectorAll('pre');
for (let i = 0; i < pre.length; i++){
    pre[i].innerText = code[i];
}