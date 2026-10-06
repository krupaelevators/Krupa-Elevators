/**
 * assetUrl helper
 * Ensures asset paths always include the correct base path, whether running
 * locally (/) or on GitHub Pages (/KrupaElevator/).
 */
export function assetUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || "/";
  return base.endsWith("/") ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

export function webpUrl(path) {
  if (!path) return "";
  const webpPath = path.replace(/\.(jpe?g|png)$/i, ".webp");
  return assetUrl(webpPath);
}

export default assetUrl;
