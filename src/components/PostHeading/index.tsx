import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: HeadingTag = 'h2',
}: PostHeadingProps) {
  const HeadingClassesMap = {
    h1: 'text-2xl/tight text-4xl',
    h2: 'text-2xl/tight sm:text-4xl',
  };
  const CommonClasses = 'font-extrabold';

  return (
    <HeadingTag className={clsx(HeadingClassesMap[HeadingTag], CommonClasses)}>
      <Link href={url}>{children}</Link>
    </HeadingTag>
  );
}
