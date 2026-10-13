/**
 * assetUrl helper
 * Ensures asset paths always include the app's base path (import.meta.env.BASE_URL,
 * currently "/"), so the site can be moved under a sub-path without touching data files.
 */
export function assetUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const base = import.meta.env.BASE_URL || "/";
  // Already prefixed (e.g. webpUrl() on a path that went through assetUrl())
  if (base !== "/" && path.startsWith(base)) return path;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return base.endsWith("/") ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

export function webpUrl(path) {
  if (!path) return "";
  const webpPath = path.replace(/\.(jpe?g|png)$/i, ".webp");
  return assetUrl(webpPath);
}

export default assetUrl;
