import "./Typography.css";

/**
 *
 * @param {object} props size: xxl, xl, lg, md, sm, xs
 * @returns
 */
export default function Typography({ children, size = "md", bold = false }) {
  return (
    <div className={`Typography-${size} ${bold ? "Typography-bold" : ""}`}>
      {children}
    </div>
  );
}
