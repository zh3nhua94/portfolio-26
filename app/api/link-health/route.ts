const REQUEST_TIMEOUT_MS = 4000;

function withTimeout(signal?: AbortSignal) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  if (signal) {
    signal.addEventListener("abort", () => controller.abort(), { once: true });
  }

  return {
    signal: controller.signal,
    dispose: () => clearTimeout(timer),
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get("url");

  if (!target) {
    return Response.json({ up: false, reason: "missing_url" }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(target);
  } catch {
    return Response.json({ up: false, reason: "invalid_url" }, { status: 400 });
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return Response.json({ up: false, reason: "invalid_protocol" }, { status: 400 });
  }

  const timeout = withTimeout();

  try {
    const head = await fetch(parsed.toString(), {
      method: "HEAD",
      redirect: "follow",
      signal: timeout.signal,
      cache: "no-store",
    });

    if (head.ok) {
      return Response.json({ up: true });
    }

    const getFallback = await fetch(parsed.toString(), {
      method: "GET",
      redirect: "follow",
      signal: timeout.signal,
      cache: "no-store",
    });

    return Response.json({ up: getFallback.ok });
  } catch {
    return Response.json({ up: false });
  } finally {
    timeout.dispose();
  }
}
