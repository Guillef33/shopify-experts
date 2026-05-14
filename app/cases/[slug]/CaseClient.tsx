"use client";
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

const SomosReyesContent = dynamic(() => import('../somos-reyes/Content'), { ssr: false });
const NutritionContent = dynamic(() => import('../310-nutrition/Content'), { ssr: false });
const EngineeringContent = dynamic(() => import('../engineering/Content'), { ssr: false });
const GlobalEdgeContent = dynamic(() => import('../global-edge-migration/Content'), { ssr: false });

export default function CaseClient({ slug }: { slug: string }) {
  const components: Record<string, React.ComponentType> = {
    'somos-reyes': SomosReyesContent,
    '310-nutrition': NutritionContent,
    'engineering': EngineeringContent,
    'global-edge-migration': GlobalEdgeContent,
  };

  const Component = components[slug];
  return Component ? <Component /> : notFound();
}