'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { ShoppingCart, Heart, ChevronDown, ChevronUp, Star, SlidersHorizontal, X } from 'lucide-react';
import type { RoomProduct } from '@/constants/data';

type Props = {
  products: RoomProduct[];
  roomName: string;
};

type FilterState = {
  categories: string[];
  materials: string[];
  styles: string[];
  colors: string[];
  priceMin: number;
  priceMax: number;
  onSale: boolean;
  inStock: boolean;
};

const PRICE_RANGES = [
  { label: 'Under $200', min: 0, max: 200 },
  { label: '$200 – $500', min: 200, max: 500 },
  { label: '$500 – $1,000', min: 500, max: 1000 },
  { label: '$1,000 – $2,000', min: 1000, max: 2000 },
  { label: 'Over $2,000', min: 2000, max: Infinity },
];

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1 mt-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`h-3 w-3 ${s <= Math.round(rating) ? 'fill-[#c4a882] text-[#c4a882]' : 'text-gray-300 fill-gray-200'}`}
        />
      ))}
      <span className="text-[11px] text-gray-500 ml-0.5">({count})</span>
    </div>
  );
}

function FilterAccordion({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm font-semibold text-[#1a1a1a] uppercase tracking-wider hover:text-[#c05c4b] transition-colors"
      >
        {title}
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

export default function ProductGridClient({ products, roomName }: Props) {
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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
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

  // Toggle array filter
  function toggleArr<T>(arr: T[], val: T): T[] {
    return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];
  }

  const toggleCategory = (v: string) => setFilters((f) => ({ ...f, categories: toggleArr(f.categories, v) }));
  const toggleMaterial = (v: string) => setFilters((f) => ({ ...f, materials: toggleArr(f.materials, v) }));
  const toggleStyle = (v: string) => setFilters((f) => ({ ...f, styles: toggleArr(f.styles, v) }));
  const toggleColor = (v: string) => setFilters((f) => ({ ...f, colors: toggleArr(f.colors, v) }));
  const setPriceRange = (min: number, max: number) =>
    setFilters((f) => ({ ...f, priceMin: f.priceMin === min && f.priceMax === max ? 0 : min, priceMax: f.priceMin === min && f.priceMax === max ? Infinity : max }));

  const clearAll = () =>
    setFilters({ categories: [], materials: [], styles: [], colors: [], priceMin: 0, priceMax: Infinity, onSale: false, inStock: false });

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

  const sidebarContent = (
    <aside className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">Filters</h2>
        {activeFilterCount > 0 && (
          <button onClick={clearAll} className="text-xs text-[#c05c4b] hover:underline flex items-center gap-1">
            <X className="h-3 w-3" /> Clear all
          </button>
        )}
      </div>

      {/* On Sale */}
      <div className="border-b border-gray-100 py-4">
        <label className="flex items-center gap-2.5 cursor-pointer group">
          <div
            className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${filters.onSale ? 'bg-[#1a1a1a] border-[#1a1a1a]' : 'border-gray-300 group-hover:border-[#1a1a1a]'}`}
            onClick={() => setFilters((f) => ({ ...f, onSale: !f.onSale }))}
          >
            {filters.onSale && <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
          </div>
          <span className="text-sm text-gray-700">On Sale</span>
        </label>
      </div>

      {/* Price */}
      <FilterAccordion title="Price">
        <div className="space-y-2">
          {PRICE_RANGES.map((r) => (
            <label key={r.label} className="flex items-center gap-2.5 cursor-pointer group">
              <div
                className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${filters.priceMin === r.min && filters.priceMax === r.max ? 'bg-[#1a1a1a] border-[#1a1a1a]' : 'border-gray-300 group-hover:border-[#1a1a1a]'}`}
                onClick={() => setPriceRange(r.min, r.max)}
              >
                {filters.priceMin === r.min && filters.priceMax === r.max && (
                  <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                )}
              </div>
              <span className="text-sm text-gray-700">{r.label}</span>
            </label>
          ))}
        </div>
      </FilterAccordion>

      {/* Color */}
      <FilterAccordion title="Color">
        <div className="flex flex-wrap gap-2">
          {allColors.map((c) => (
            <button
              key={c.name}
              title={c.name}
              onClick={() => toggleColor(c.name)}
              className={`relative w-6 h-6 rounded-full border-2 transition-all ${filters.colors.includes(c.name) ? 'border-[#1a1a1a] scale-110 shadow-md' : 'border-transparent hover:border-gray-300'}`}
              style={{ backgroundColor: c.hex }}
            >
              {filters.colors.includes(c.name) && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-3 w-3 text-white drop-shadow" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              )}
            </button>
          ))}
        </div>
        {filters.colors.length > 0 && (
          <p className="text-xs text-gray-500 mt-2">{filters.colors.join(', ')}</p>
        )}
      </FilterAccordion>

      {/* Category */}
      <FilterAccordion title="Category">
        <div className="space-y-2">
          {allCategories.map((cat) => {
            const count = products.filter((p) => p.category === cat).length;
            const active = filters.categories.includes(cat);
            return (
              <label key={cat} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${active ? 'bg-[#1a1a1a] border-[#1a1a1a]' : 'border-gray-300 group-hover:border-[#1a1a1a]'}`}
                    onClick={() => toggleCategory(cat)}
                  >
                    {active && <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </div>
                  <span className="text-sm text-gray-700">{cat}</span>
                </div>
                <span className="text-xs text-gray-400">{count}</span>
              </label>
            );
          })}
        </div>
      </FilterAccordion>

      {/* Material */}
      <FilterAccordion title="Material" defaultOpen={false}>
        <div className="space-y-2">
          {allMaterials.map((mat) => {
            const count = products.filter((p) => p.material === mat).length;
            const active = filters.materials.includes(mat);
            return (
              <label key={mat} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${active ? 'bg-[#1a1a1a] border-[#1a1a1a]' : 'border-gray-300 group-hover:border-[#1a1a1a]'}`}
                    onClick={() => toggleMaterial(mat)}
                  >
                    {active && <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </div>
                  <span className="text-sm text-gray-700">{mat}</span>
                </div>
                <span className="text-xs text-gray-400">{count}</span>
              </label>
            );
          })}
        </div>
      </FilterAccordion>

      {/* Style */}
      <FilterAccordion title="Style" defaultOpen={false}>
        <div className="space-y-2">
          {allStyles.map((style) => {
            const count = products.filter((p) => p.style === style).length;
            const active = filters.styles.includes(style);
            return (
              <label key={style} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${active ? 'bg-[#1a1a1a] border-[#1a1a1a]' : 'border-gray-300 group-hover:border-[#1a1a1a]'}`}
                    onClick={() => toggleStyle(style)}
                  >
                    {active && <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </div>
                  <span className="text-sm text-gray-700">{style}</span>
                </div>
                <span className="text-xs text-gray-400">{count}</span>
              </label>
            );
          })}
        </div>
      </FilterAccordion>
    </aside>
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      {/* Top bar */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200 mb-6">
        <div className="flex items-center gap-3">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm font-medium text-[#1a1a1a] border border-gray-300 rounded-sm px-3 py-1.5 hover:border-[#1a1a1a] transition-colors"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-[#1a1a1a] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">{activeFilterCount}</span>
            )}
          </button>
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-[#1a1a1a]">{filteredProducts.length}</span> products
            {activeFilterCount > 0 && <span className="text-gray-400"> filtered</span>}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <label htmlFor="sort" className="hidden sm:block text-gray-500">Sort by</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-200 rounded-sm bg-white px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#1a1a1a] appearance-none pr-8"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23666' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
            <option value="rating">Best Rated</option>
          </select>
        </div>
      </div>

      {/* Active filter pills */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {filters.onSale && (
            <button onClick={() => setFilters((f) => ({ ...f, onSale: false }))} className="flex items-center gap-1.5 bg-[#1a1a1a] text-white text-xs px-3 py-1 rounded-full hover:bg-[#c05c4b] transition-colors">
              On Sale <X className="h-3 w-3" />
            </button>
          )}
          {(filters.priceMin > 0 || filters.priceMax < Infinity) && (
            <button onClick={() => setFilters((f) => ({ ...f, priceMin: 0, priceMax: Infinity }))} className="flex items-center gap-1.5 bg-[#1a1a1a] text-white text-xs px-3 py-1 rounded-full hover:bg-[#c05c4b] transition-colors">
              {PRICE_RANGES.find((r) => r.min === filters.priceMin && r.max === filters.priceMax)?.label || 'Price'} <X className="h-3 w-3" />
            </button>
          )}
          {filters.categories.map((c) => (
            <button key={c} onClick={() => toggleCategory(c)} className="flex items-center gap-1.5 bg-[#1a1a1a] text-white text-xs px-3 py-1 rounded-full hover:bg-[#c05c4b] transition-colors">
              {c} <X className="h-3 w-3" />
            </button>
          ))}
          {filters.colors.map((c) => (
            <button key={c} onClick={() => toggleColor(c)} className="flex items-center gap-1.5 bg-[#1a1a1a] text-white text-xs px-3 py-1 rounded-full hover:bg-[#c05c4b] transition-colors">
              {c} <X className="h-3 w-3" />
            </button>
          ))}
          {filters.materials.map((m) => (
            <button key={m} onClick={() => toggleMaterial(m)} className="flex items-center gap-1.5 bg-[#1a1a1a] text-white text-xs px-3 py-1 rounded-full hover:bg-[#c05c4b] transition-colors">
              {m} <X className="h-3 w-3" />
            </button>
          ))}
          {filters.styles.map((s) => (
            <button key={s} onClick={() => toggleStyle(s)} className="flex items-center gap-1.5 bg-[#1a1a1a] text-white text-xs px-3 py-1 rounded-full hover:bg-[#c05c4b] transition-colors">
              {s} <X className="h-3 w-3" />
            </button>
          ))}
          <button onClick={clearAll} className="flex items-center gap-1.5 border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded-full hover:border-[#c05c4b] hover:text-[#c05c4b] transition-colors">
            Clear all
          </button>
        </div>
      )}

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-[220px] shrink-0">
          {sidebarContent}
        </div>

        {/* Product Grid */}
        <div className="flex-1 min-w-0">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <SlidersHorizontal className="h-7 w-7 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">No products match your filters</h3>
              <p className="text-sm text-gray-500 mb-4">Try adjusting or clearing your filters</p>
              <button onClick={clearAll} className="bg-[#1a1a1a] text-white text-sm px-6 py-2.5 rounded-sm hover:bg-[#c05c4b] transition-colors">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
              {filteredProducts.map((product) => {
                const isWishlisted = wishlist.includes(product.id);
                return (
                  <article key={product.id} className="group">
                    {/* Image */}
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100 mb-3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Badge */}
                      {product.badge && (
                        <span
                          className={`absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 z-10
                            ${product.badge === 'Sale' ? 'bg-[#c05c4b] text-white' : ''}
                            ${product.badge === 'New' ? 'bg-[#1a1a1a] text-white' : ''}
                            ${product.badge === 'Best Seller' ? 'bg-white text-[#1a1a1a]' : ''}
                          `}
                        >
                          {product.badge}
                        </span>
                      )}
                      {/* Wishlist */}
                      <button
                        onClick={() => setWishlist((w) => isWishlisted ? w.filter((id) => id !== product.id) : [...w, product.id])}
                        className={`absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 ${isWishlisted ? 'text-[#c05c4b]' : 'text-gray-400 hover:text-[#c05c4b]'}`}
                      >
                        <Heart className={`h-3.5 w-3.5 ${isWishlisted ? 'fill-[#c05c4b]' : ''}`} />
                      </button>
                      {/* Add to Cart hover */}
                      <div className="absolute bottom-0 inset-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                        <button className="w-full bg-[#1a1a1a] text-white text-xs font-semibold py-2.5 flex items-center justify-center gap-1.5 hover:bg-[#c05c4b] transition-colors">
                          <ShoppingCart className="h-3.5 w-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>

                    {/* Color swatches */}
                    {product.colors && product.colors.length > 0 && (
                      <div className="flex items-center gap-1 mb-1.5">
                        {product.colors.slice(0, 5).map((c) => (
                          <div
                            key={c.name}
                            title={c.name}
                            className="w-3.5 h-3.5 rounded-full border border-gray-200 cursor-pointer hover:scale-125 transition-transform"
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                        {product.colors.length > 5 && (
                          <span className="text-[10px] text-gray-400 ml-0.5">+{product.colors.length - 5}</span>
                        )}
                      </div>
                    )}

                    {/* Info */}
                    <h3 className="text-[13px] font-medium text-[#1a1a1a] leading-snug group-hover:underline line-clamp-2 cursor-pointer">
                      {product.name}
                    </h3>
                    {product.rating && <StarRating rating={product.rating} count={product.reviewCount ?? 0} />}
                    <div className="flex items-center gap-2 mt-1">
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">${product.originalPrice.toLocaleString()}</span>
                      )}
                      <span className={`text-sm font-semibold ${product.originalPrice ? 'text-[#c05c4b]' : 'text-[#1a1a1a]'}`}>
                        ${product.price.toLocaleString()}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="relative ml-auto w-80 max-w-full bg-white h-full overflow-y-auto p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#1a1a1a]">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-gray-400 hover:text-[#1a1a1a]">
                <X className="h-5 w-5" />
              </button>
            </div>
            {sidebarContent}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button onClick={() => setMobileFiltersOpen(false)} className="w-full bg-[#1a1a1a] text-white py-3 text-sm font-semibold hover:bg-[#c05c4b] transition-colors rounded-sm">
                View {filteredProducts.length} Products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
