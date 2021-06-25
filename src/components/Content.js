import "./Content.css";

/**
 *
 * @param {{children: Element}} props
 */
export default function Content({ children }) {
  return <div className="Content-container">{children}</div>;
}
