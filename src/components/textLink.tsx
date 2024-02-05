import Link from 'next/link';

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 text-[#e5f7ef]"
      href={`#${href}`}
    >
      {children}
    </Link>
  );
}

export default TextLink;
