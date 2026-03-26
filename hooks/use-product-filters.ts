'use client';

import { useState, useMemo } from 'react';
import type { RoomProduct } from '@/constants/data';

export type FilterState = {
  categories: string[];
  materials: string[];
  styles: string[];
  colors: string[];
  priceMin: number;
  priceMax: number;
  onSale: boolean;
  inStock: boolean;
};

export function useProductFilters(products: RoomProduct[]) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    materials: [],
    styles: [],
    colors: [],
    priceMin: 0,
    priceMax: Infinity,
    onSale: false,
    inStock: false,
  });
  const [sortBy, setSortBy] = useState('featured');
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Derive unique filter values
  const allCategories = useMemo(() => [...new Set(products.map((p) => p.category).filter(Boolean))] as string[], [products]);
  const allMaterials = useMemo(() => [...new Set(products.map((p) => p.material).filter(Boolean))] as string[], [products]);
  const allStyles = useMemo(() => [...new Set(products.map((p) => p.style).filter(Boolean))] as string[], [products]);
  const allColors = useMemo(() => {
    const map = new Map<string, string>();
    products.forEach((p) => p.colors?.forEach((c) => map.set(c.name, c.hex)));
    return [...map.entries()].map(([name, hex]) => ({ name, hex }));
  }, [products]);

  // Toggle array filter helper
  function toggleArr<T>(arr: T[], val: T): T[] {
    return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];
  }

  const toggleCategory = (v: string) => setFilters((f) => ({ ...f, categories: toggleArr(f.categories, v) }));
  const toggleMaterial = (v: string) => setFilters((f) => ({ ...f, materials: toggleArr(f.materials, v) }));
  const toggleStyle = (v: string) => setFilters((f) => ({ ...f, styles: toggleArr(f.styles, v) }));
  const toggleColor = (v: string) => setFilters((f) => ({ ...f, colors: toggleArr(f.colors, v) }));
  const setPriceRange = (min: number, max: number) =>
    setFilters((f) => ({ 
      ...f, 
      priceMin: f.priceMin === min && f.priceMax === max ? 0 : min, 
      priceMax: f.priceMin === min && f.priceMax === max ? Infinity : max 
    }));

  const clearAll = () =>
    setFilters({ categories: [], materials: [], styles: [], colors: [], priceMin: 0, priceMax: Infinity, onSale: false, inStock: false });

  const toggleWishlist = (id: number) => {
    setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));
  };

  const activeFilterCount =
    filters.categories.length + filters.materials.length + filters.styles.length + filters.colors.length +
    (filters.priceMin > 0 || filters.priceMax < Infinity ? 1 : 0) +
    (filters.onSale ? 1 : 0) + (filters.inStock ? 1 : 0);

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => {
      if (filters.categories.length && !filters.categories.includes(p.category ?? '')) return false;
      if (filters.materials.length && !filters.materials.includes(p.material ?? '')) return false;
      if (filters.styles.length && !filters.styles.includes(p.style ?? '')) return false;
      if (filters.colors.length && !p.colors?.some((c) => filters.colors.includes(c.name))) return false;
      if (p.price < filters.priceMin || p.price > filters.priceMax) return false;
      if (filters.onSale && !p.originalPrice) return false;
      return true;
    });

    switch (sortBy) {
      case 'price-asc': list = [...list].sort((a, b) => a.price - b.price); break;
      case 'price-desc': list = [...list].sort((a, b) => b.price - a.price); break;
      case 'newest': list = [...list].sort((a) => (a.badge === 'New' ? -1 : 1)); break;
      case 'rating': list = [...list].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)); break;
    }
    return list;
  }, [products, filters, sortBy]);

  return {
    filters,
    setFilters,
    sortBy,
    setSortBy,
    wishlist,
    toggleWishlist,
    allCategories,
    allMaterials,
    allStyles,
    allColors,
    toggleCategory,
    toggleMaterial,
    toggleStyle,
    toggleColor,
    setPriceRange,
    clearAll,
    activeFilterCount,
    filteredProducts,
  };
}
