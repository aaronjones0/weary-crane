function handler(request: Request): Response {
  return new Response('Hello, world, from Boca Lane.');
}

Deno.serve(handler);
