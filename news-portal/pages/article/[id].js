import { useRouter } from 'next/router';
import newsArticles from '../../newsdata';
import Layout from '../../components/layout';

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;

  const article = newsArticles.find((item) => item.id === id);

  if (!article) {
    return <Layout><p>Loading or article not found...</p></Layout>;
  }

  return (
    <Layout>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </Layout>
  );
}
