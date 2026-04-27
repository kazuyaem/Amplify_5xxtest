export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Amplify 5XX Test</h1>
      <p>Server time: {new Date().toISOString()}</p>
      <ul>
        <li><a href="/api/ok">/api/ok</a> - 200 OK</li>
        <li><a href="/api/error500">/api/error500</a> - 500 Internal Server Error</li>
        <li><a href="/api/error502">/api/error502</a> - 502 Bad Gateway</li>
        <li><a href="/api/error503">/api/error503</a> - 503 Service Unavailable</li>
      </ul>
    </div>
  );
}
