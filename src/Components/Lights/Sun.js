import { DirectionalLight } from "three";

function sun() {
  const color = 0xffffff;
  const intensity = 1;
  const light = new DirectionalLight(color, intensity);
  light.position.set(0, 10, 0);
  light.target.position.set(-5, 0, 0);
  return light;
}

export default sun;
