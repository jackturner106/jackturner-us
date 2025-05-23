import { experience_list } from '../../data/experiences';
import DetailPanel from '../../components/DetailPanel';
import { notFound } from 'next/navigation';

export default function ExperienceDetail({ params }: { params: { id: string } }) {
  const item = experience_list.find((e) => e.id === Number(params.id));
  if (!item) return notFound();
  return <DetailPanel item={item} />;
} 