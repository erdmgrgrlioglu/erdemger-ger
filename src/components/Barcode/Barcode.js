import React, { useEffect, useRef } from "react";
import PDF417 from "pdf417-generator";

export default function Barcode(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (props.value != null) {
      PDF417.draw(
        props.value,
        canvasRef.current,
        props.aspectRatio,
        props.ecl,
        props.pixelRatio,
        props.lineColor
      );
    }
  }, [props.value, props.aspectRatio, props.ecl, props.pixelRatio]);

  return <canvas ref={canvasRef} className={props.className} />;
}
