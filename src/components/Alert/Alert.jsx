import clsx from "clsx";
import css from "./Alert.module.css";
import { AiFillFire } from "react-icons/ai";

export default function Alert({ variant, outlined, elevated, children }) {
  const className = clsx(
    css[variant],
    outlined && "is-outlined",
    elevated && "is-elevated"
  );

  return (
    <div>
      <p className={className}>
        <AiFillFire /> {children}
      </p>
    </div>
  );
}
