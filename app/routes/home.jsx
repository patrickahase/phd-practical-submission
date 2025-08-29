import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "Patrick McMahon/Hase PhD Documentation" },
    { name: "description", content: "documentation bringing together all my PhD projects" },
  ];
}

export default function Home() {
  return <Welcome />;
}
