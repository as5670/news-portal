import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import newsArticles from '../newsdata'; 

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(newsArticles.map(a => a.category)))];

  const filteredArticles = selectedCategory === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <Layout>
      <h1>Latest News </h1>

      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'active' : ''}
            style={{
              marginRight: '0.8rem',
              marginBottom: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: selectedCategory === cat ? '#3b82f6' : 'rgba(51, 65, 85, 0.6)',
              color: selectedCategory === cat ? '#fff' : '#e2e8f0',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul>
        {filteredArticles.map(article => (
          <li key={article.id}>
            
              <h2>
  <Link href={`/news/${article.id}`}>
    {article.title}
  </Link>
</h2>

            
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
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
