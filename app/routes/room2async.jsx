import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "room2 async" },
    { name: "description", content: "documentation of room2 async" },
  ];
}

export default function Home() {
  return <Welcome />;
}
