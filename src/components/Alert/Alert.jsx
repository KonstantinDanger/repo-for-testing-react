import clsx from "clsx";
import "./Alert.css";

export default function Alert({ variant, outlined, elevated, children }) {
  const className = clsx("alert", variant, {
    "is-outlined": outlined,
    "is-elevated": elevated,
  });

  return <p className={className}>{children}</p>;
}
