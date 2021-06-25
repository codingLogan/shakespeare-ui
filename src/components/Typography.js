import "./Typography.css";

/**
 *
 * @param {{
 *  children: Element,
 *  size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs',
 *  bold: boolean
 * }} props
 * @returns
 */
export default function Typography({ children, size = "md", bold = false }) {
  return (
    <div className={`Typography-${size} ${bold ? "Typography-bold" : ""}`}>
      {children}
    </div>
  );
}
