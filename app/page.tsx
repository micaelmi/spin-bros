import { redirect } from "next/navigation";

export default function Home() {
  redirect("/landing");
  return (
    <div className="flex justify-center items-center bg-zinc-50 dark:bg-black min-h-screen font-sans">
      Hello world
    </div>
  );
}
