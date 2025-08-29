import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "room2 sync" },
    { name: "description", content: "documentation of room2 sync" },
  ];
}

export default function Home() {
  return <Welcome />;
}
