import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';


export default function Home({ articles }) {
  return (
    <div style={{ padding: 20 }}>
      <h1> Top Headlines</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {articles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          articles.map((article, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ccc",
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt="news"
                  style={{ width: "100%", height: 180, objectFit: "cover" }}
                />
              )}
              <div style={{ padding: 16 }}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Read more
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ✅ Server-side data fetching
export async function getServerSideProps() {
  const lambdaUrl = process.env.LAMBDA_URL;

  const res = await fetch(lambdaUrl);
  const data = await res.json();

  console.log('🔗 Lambda response:', data);

  return {
    props: {
      articles: data.articles || [],
    },
  };
}

