import { cx } from "lib/cx";

export const Link = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cx(
        "underline underline-offset-2 hover:decoration-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
        className
      )}
    >
      {children}
    </a>
  );
};
