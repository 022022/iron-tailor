export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Тренировка не найдена</h2>
        <p>Проверьте выбранные параметры.</p>
      </div>
    </main>
  );
}