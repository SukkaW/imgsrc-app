export function absoluteUrl(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const absoluteUrl = baseUrl ? new URL(path, baseUrl) : new URL(path, window.location.href)
  return absoluteUrl.toString()
}
