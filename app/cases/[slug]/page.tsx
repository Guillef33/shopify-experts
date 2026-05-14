import CaseClient from './CaseClient';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseClient slug={slug} />;
}