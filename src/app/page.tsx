import { metadata } from "./page.metadata";
import { TrainingSelector } from "@/features/training-selector/TrainingSelector";

export { metadata };

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <TrainingSelector />
    </main>
  );
}
