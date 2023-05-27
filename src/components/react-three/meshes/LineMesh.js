import { Line } from "@react-three/drei";

export default function LineMesh(props) {
  return <Line {...props} color="#4b988a" lineWidth={1} dashed={false} />;
}
