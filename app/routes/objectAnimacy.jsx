import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "Object Animacy" },
    { name: "description", content: "documentation of Object Animacy" },
  ];
}

export default function Home() {
  return <Welcome />;
}
