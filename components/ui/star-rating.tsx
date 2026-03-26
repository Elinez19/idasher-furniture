import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  count?: number;
  size?: number;
}

export function StarRating({ rating, count, size = 12 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1 mt-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          style={{ width: size, height: size }}
          className={
            s <= Math.round(rating)
              ? 'fill-[#c4a882] text-[#c4a882]'
              : 'text-gray-300 fill-gray-200'
          }
        />
      ))}
      {count !== undefined && (
        <span className="text-[11px] text-gray-500 ml-0.5">({count})</span>
      )}
    </div>
  );
}
