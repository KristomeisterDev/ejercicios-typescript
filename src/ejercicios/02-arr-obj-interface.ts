let habilidades: (boolean | string | Number)[] = [
  "Bash",
  "Counter",
  "Healing",
  100,
];

//habilidades.push()

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: "Strider",
  hp: 100,
  habilidades: ["Bash", "Counter", "Healing"],
};

personaje.puebloNatal = "Pueblo Numenor";

console.table(personaje);
