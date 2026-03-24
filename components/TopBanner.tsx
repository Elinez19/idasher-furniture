import Link from 'next/link';

export function TopBanner() {
  return (
    <div className="bg-[#1A1A1A] text-white text-xs font-medium py-2 px-4 text-center">
      Get financing as low as 0% APR for up to 12 months.{' '}
      <Link href="#" className="underline hover:text-gray-300">
        Learn more.
      </Link>
    </div>
  );
}
