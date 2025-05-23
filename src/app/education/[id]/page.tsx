import { education_list } from '../../data/educations';
import DetailPanel from '../../components/DetailPanel';
import { notFound } from 'next/navigation';

export default function EducationDetail({ params }: { params: { id: string } }) {
  const item = education_list.find((e) => e.id === Number(params.id));
  if (!item) return notFound();
  return <DetailPanel item={item} />;
} 