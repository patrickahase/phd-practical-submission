import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "SUNKLAND.XYZ" },
    { name: "description", content: "documentation of SUNKLAND.XYZ" },
  ];
}

export default function Home() {
  return <Welcome />;
}
