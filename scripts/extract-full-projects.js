function readValue(field, objectText) {
  const direct = new RegExp(`${field}:"([^"]*)"`);
  const directMatch = objectText.match(direct);
  if (directMatch) return directMatch[1];

  const bool = new RegExp(`${field}:(!0|!1)`);
  const boolMatch = objectText.match(bool);
  if (boolMatch) return boolMatch[1] === "!0";

  const arr = new RegExp(`${field}:\\[([^\\]]+)\\]`);
  const arrMatch = objectText.match(arr);
  if (arrMatch) {
    return arrMatch[1]
      .split(",")
      .map((item) => item.trim().replace(/^"|"$/g, ""))
      .filter(Boolean);
  }
  return "";
}

async function main() {
  const response = await fetch("https://zenwong.vercel.app/assets/index-05af88e0.js");
  if (!response.ok) {
    throw new Error(`Failed to fetch bundle: ${response.status}`);
  }
  const text = await response.text();
  const objects = [...text.matchAll(/\{id:\d+,title:"[^"]+"[\s\S]*?\}/g)].map((m) => m[0]);

  const projects = objects
    .map((objectText) => {
      const title = readValue("title", objectText);
      return {
        id: Number(readValue("id", objectText)),
        title,
        cat: readValue("cat", objectText),
        img: readValue("img", objectText),
        siteImg: readValue("siteImg", objectText),
        descTitle: readValue("descTitle", objectText),
        desc: readValue("desc", objectText),
        youtubeId: readValue("youtubeId", objectText),
        code: readValue("code", objectText),
        url: readValue("url", objectText),
        demo: readValue("demo", objectText),
        featured: readValue("featured", objectText),
      };
    })
    .filter((item) => item.title && item.title !== "YouTube video player");

  console.log(JSON.stringify(projects, null, 2));
  console.error(`count ${projects.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
