export const runtime = 'edge';
import HadithView from './components/hadithView/HadithView';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  return <HadithView />;
}
