import { useEffect, useRef } from "react";
import styles from "./ProductCard.module.css";
import data from "./../../data";

export function ProductCard({ cld, product }) {
  const videoRef = useRef(null);
  useEffect(() => {
    var source = data[product];
    var demoplayer = cld
      .videoPlayer(videoRef.current /*"doc-player"*/)
      .width(850);
    demoplayer.source(product, source);
    // sea_turtle
    // rafting
    // race_road_car
  });

  return (
    <div className={styles.productcard}>
      <video width="500" ref={videoRef} controls muted preload="false">
        {" "}
      </video>
    </div>
  );
}
