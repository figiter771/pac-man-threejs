import { PerspectiveCamera } from "three";

const CAMERA = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
CAMERA.position.set(0, 1, 6);

export default CAMERA;
