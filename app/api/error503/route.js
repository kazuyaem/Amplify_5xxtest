export async function GET() {
  return new Response(JSON.stringify({ error: 'Service Unavailable' }), {
    status: 503,
    headers: { 'Content-Type': 'application/json' },
  });
}
