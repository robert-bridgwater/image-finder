import React from "react";
import styles from "./styles.module.css";

interface IProps {
  children: React.ReactNode;
  size?: "xxxs" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
}

export const Container: React.FC<IProps> = ({ children, size = "m" }) => {
  const containerClassName = `${styles.container} ${styles[size]}`;

  return <div className={containerClassName}>{children}</div>;
};
