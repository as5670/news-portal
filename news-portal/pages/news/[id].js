import { useRouter } from 'next/router';
import newsArticles from '../../newsdata';
import Layout from '../../components/layout';
import Link from 'next/link';

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;

  // Compare string-to-string to match your data
  const article = newsArticles.find((item) => item.id === id);

  if (!article) {
    return <Layout><p>Loading or article not found...</p></Layout>;
  }

  return (
    <Layout>
      <h1>{article.title}</h1>
      <p style={{
        display: 'inline-block',
        backgroundColor: '#1e40af',
        color: '#e0e7ff',
        fontSize: '0.75rem',
        fontWeight: '600',
        padding: '0.2rem 0.6rem',
        borderRadius: '6px',
        marginBottom: '0.75rem'
      }}>
        {article.category}
      </p>
      <p>{article.content || article.summary || "No content available."}</p>
      <p>
        <Link href="/" style={{color:"#3b82f6"}}>← Back to Home</Link>
      </p>
    </Layout>
  );
}

