export function GET({ url }: { url: URL }) {
  return Response.redirect(new URL("/embed/script.js", url), 302);
}
