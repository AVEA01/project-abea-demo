export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">案件詳細: {params.id}</h1>
      <p>ここに案件の詳細情報とコメントが表示されます。</p>
    </main>
  );
}
