import imgcard1 from "../assets/images/imgcard1.webp";
import imgcard2 from "../assets/images/imgcard2.webp";
import imgcard3 from "../assets/images/imgcard3.webp";
import imgcard4 from "../assets/images/imgcard4.webp";
import imgcard5 from "../assets/images/imgcard5.webp";

const products = [
  {
    id: 1,
    title: "Forrest Gump",
    category: "Drama",
    description: "La increíble vida de Forrest Gump, un hombre sencillo que, sin proponérselo, termina siendo protagonista de grandes acontecimientos históricos.",
    stock: 12,
    price: 5000,
    image: imgcard1
  },
  {
    id: 2,
    title: "Mi pobre angelito",
    category: "Comedia",
    description: "Un niño queda accidentalmente solo en casa durante Navidad y deberá ingeniárselas para defenderla de dos torpes ladrones.",
    price: 5000,
    stock: 18,
    image: imgcard2
  },
  {
    id: 3,
    title: "Terminator",
    category: "Acción",
    description: "Un cyborg asesino viaja desde el futuro con una misión: eliminar a Sarah Connor y evitar el nacimiento del futuro líder de la resistencia humana.",
    price: 5000,
    stock: 32,
    image: imgcard3
  },
  {
    id: 4,
    title: "Papá por siempre",
    category: "Comedia",
    description: "Un padre dispuesto a todo se disfraza de niñera para poder pasar más tiempo con sus hijos después de un difícil divorcio.",
    price: 5000,
    stock: 6,
    image: imgcard4
  },
  {
    id: 5,
    title: "Space Jam",
    category: "Comedia",
    description: "Michael Jordan une fuerzas con los Looney Tunes para enfrentarse a un equipo de extraterrestres en un partido de básquet que decidirá su destino.",
    price: 5000,
    stock: 3,
    image: imgcard5
  }
];

export default products

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}
