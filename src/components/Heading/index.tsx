import React from "react";

// import styles from "./styles.module.css";

interface IProps {
  heading: string | null;
}

export const Heading: React.FC<IProps> = ({ heading }: IProps) => {
  return <h1>{heading}</h1>;
};
