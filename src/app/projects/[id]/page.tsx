import { project_list } from '../../data/projects';
import DetailPanel from '../../components/DetailPanel';
import { notFound } from 'next/navigation';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const item = project_list.find((p) => p.id === Number(params.id));
  if (!item) return notFound();
  return <DetailPanel item={item} />;
} 