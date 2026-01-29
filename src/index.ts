// Variable di typescript bisa didefinisikan klo tidak didefinisikan maka value pertama kali akan menjadi type data variable tersebut...

let nama: String = `Mazumala`;
let age: Number = 23;

// Bisa juga memberikan variable tertentu agar bisa menerima bebrapa tipe data...

let isMaried: Boolean | String = `True`;

// Bisa menerima data apapun
let isHandsome: any = true;

// Cara membuat Array...
let arr: string[] = ["Clara", "Zumal", "Tarisa"]
console.log(arr);

// Membuat array dengan banyak tipe data...
let arr2: (String | Number | Boolean)[] = ["Zumal", 23, false];

let arr3: any = ["Mazumala", 23, false];

// Tipe data Tuple...
// Merupakan tipe data yang sudah ditentukan panjang array nya...
let tuple1: [string, number, boolean];
tuple1 = ["Tarisa", 19, true];

// Object...
let mahasiswa: object[] = [
     { id: 1234, name: "Mazumala" },
     { id: 5678, name: "Tarisa" },
]
console.log(mahasiswa);

// Function...
// jadi function harusn diatur tipe datanya dan bisa juga menambahkan tipe data untuk returnnya...
function plus(a: number, b: number): number {
     return a + b;
}

// Jika ingin membuat function tanpa return...
function sayHello(name: string): void {
     console.log(`Hello ${name}`);
}

console.log(plus(1, 2));

// Interface...
// jika membuat object dengan interface maka wajib memasukkan semua properti yang telah ditentukan
interface StudentInterface {
     id: number,
     name: string,
}

let student_1: StudentInterface = {
     id: 334455,
     name: `Mazumala`
}
console.log(typeof student_1);

// Intersection / Menggabungkan 2 interface...
interface santri {
     nis: number,
     nameSantri: string
}

interface ustadz {
     niu: number,
     nameUstadz: string
}

type group = santri & ustadz;
let group_1: group = {
     nis: 2345,
     nameSantri: "Haykal",
     nameUstadz: `Paijo`,
     niu: 3456
}

// Class...
class Car {
     brand: string;
     price: number;
     constructor(brand: string, price: number) {
          this.brand = brand;
          this.price = price;
     }

     gas(): string {
          return `${this.brand} berjalan`;
     }

     buy(): string {
          const formater = new Intl.NumberFormat("id-ID", {
               style: `currency`,
               currency: "IDR",
               maximumFractionDigits: 0,
          });

          return `${formater.format(this.price)}`
     }
}

const xenia = new Car("Xenia", 230000000)
console.log(xenia.gas());
console.log(xenia.buy());






