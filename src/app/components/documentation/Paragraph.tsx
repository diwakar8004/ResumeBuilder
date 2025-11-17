import { cx } from "lib/cx";

export const Paragraph = ({
  smallMarginTop = false,
  children,
  className = "",
}: {
  smallMarginTop?: boolean;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cx(
        smallMarginTop ? "mt-[0.8em]" : "mt-[1.5em]",
        "text-base sm:text-lg text-gray-700 dark:text-gray-300",
        className
      )}
    >
      {children}
    </p>
  );
};
