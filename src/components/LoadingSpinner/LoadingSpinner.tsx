import React from "react";
import styles from "./LoadingSpinner.module.css";

interface Props {
    size?: string,
}


const LoadingSpinner: React.FC<Props> = (props) => {
  const spinnerStyle = props.size==="small"
    ? `${styles.loader} ${styles.small}`
    : `${styles.loader}`;
    
  return <div className={spinnerStyle}></div>;
};

export default LoadingSpinner;
