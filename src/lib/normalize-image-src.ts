const ABSOLUTE_PATTERN = /^(?:[a-z][a-z\d+\-.]*:|\/\/)/i;
const DUMMY_BASE = 'https://dummy.invalid';
const DUMMY_BASE_WITH_SLASH = `${DUMMY_BASE}/`;

export function normalizeImageSrc(value?: string): string | undefined {
  if (!value) return undefined;

  const trimmed = value.trim();
  if (!trimmed) return undefined;

  if (ABSOLUTE_PATTERN.test(trimmed) || trimmed.startsWith('/')) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed, DUMMY_BASE_WITH_SLASH);
    if (url.origin === DUMMY_BASE) {
      return url.pathname;
    }
    return trimmed;
  } catch {
    return trimmed;
  }
}
