export async function GET() {
  return new Response(JSON.stringify({ error: 'Bad Gateway' }), {
    status: 502,
    headers: { 'Content-Type': 'application/json' },
  });
}
