import { Counter } from "./Counter";

export function Page() {
  return (
    <>
      <h1 className="text-5xl font-bold underline py-4">Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
