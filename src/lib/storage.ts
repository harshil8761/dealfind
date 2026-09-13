const KEYS = {
  FAVORITES: 'dealfind_favorites',
  RECENT_SEARCHES: 'dealfind_recent_searches',
  RECENTLY_VIEWED: 'dealfind_recently_viewed',
};

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(KEYS.FAVORITES);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading favorites from localStorage', e);
    return [];
  }
}

export function toggleFavorite(productId: string): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const current = getFavorites();
    const exists = current.includes(productId);
    const updated = exists
      ? current.filter((id) => id !== productId)
      : [...current, productId];
    localStorage.setItem(KEYS.FAVORITES, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Error saving favorite to localStorage', e);
    return [];
  }
}

export function isFavorite(productId: string): boolean {
  return getFavorites().includes(productId);
}

export function getRecentSearches(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(KEYS.RECENT_SEARCHES);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

export function addRecentSearch(query: string): string[] {
  if (typeof window === 'undefined' || !query.trim()) return [];
  try {
    const trimmed = query.trim();
    const current = getRecentSearches().filter((q) => q.toLowerCase() !== trimmed.toLowerCase());
    const updated = [trimmed, ...current].slice(0, 6);
    localStorage.setItem(KEYS.RECENT_SEARCHES, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return [];
  }
}

export function clearRecentSearches(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(KEYS.RECENT_SEARCHES);
}

export function getRecentlyViewed(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(KEYS.RECENTLY_VIEWED);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

export function addRecentlyViewed(productId: string): string[] {
  if (typeof window === 'undefined' || !productId) return [];
  try {
    const current = getRecentlyViewed().filter((id) => id !== productId);
    const updated = [productId, ...current].slice(0, 10);
    localStorage.setItem(KEYS.RECENTLY_VIEWED, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return [];
  }
}
