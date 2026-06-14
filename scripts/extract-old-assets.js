async function main() {
  const response = await fetch("https://zenwong.vercel.app/assets/index-05af88e0.js");
  if (!response.ok) {
    throw new Error(`Failed to fetch bundle: ${response.status}`);
  }

  const js = await response.text();
  const pathMatches = [...js.matchAll(/\/assets\/[^"'`\s)]+/g)].map((m) => m[0]);
  const fullUrlMatches = [
    ...js.matchAll(/https?:\/\/[^"'`\s)]+\.(png|jpg|jpeg|webp|gif|svg|mp4)/gi),
  ].map((m) => m[0]);

  const all = [...new Set([...pathMatches, ...fullUrlMatches])].sort();
  console.log(all.join("\n"));
  console.error(`count ${all.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
