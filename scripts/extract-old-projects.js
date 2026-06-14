async function main() {
  const response = await fetch("https://zenwong.vercel.app/assets/index-05af88e0.js");
  if (!response.ok) {
    throw new Error(`Failed to fetch bundle: ${response.status}`);
  }

  const js = await response.text();
  const titles = [...js.matchAll(/title:"([^"]+)"/g)].map((m) => m[1]);
  const imgs = [...js.matchAll(/img:"([^"]+)"/g)].map((m) => m[1]);
  const siteImgs = [...js.matchAll(/siteImg:"([^"]+)"/g)].map((m) => m[1]);
  const urls = [...js.matchAll(/url:"([^"]+)"/g)].map((m) => m[1]);
  const codes = [...js.matchAll(/code:"([^"]+)"/g)].map((m) => m[1]);

  console.log(`titles ${titles.length}`);
  console.log(`imgs ${imgs.length}`);
  console.log(`siteImgs ${siteImgs.length}`);
  console.log(`urls ${urls.length}`);
  console.log(`codes ${codes.length}`);
  console.log("");

  for (let index = 0; index < Math.min(30, titles.length); index += 1) {
    const row = {
      title: titles[index] ?? "",
      img: imgs[index] ?? "",
      siteImg: siteImgs[index] ?? "",
      url: urls[index] ?? "",
      code: codes[index] ?? "",
    };
    console.log(JSON.stringify(row));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
