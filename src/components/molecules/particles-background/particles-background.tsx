import { FunctionComponent, useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { config } from "./config";

interface ParticlesBackgroundProps {}

const ParticlesBackground: FunctionComponent<ParticlesBackgroundProps> = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return <Particles className="uk-position-absolute uk-height-1-1" id="tsparticles" options={config} init={particlesInit} />;
};

export default ParticlesBackground;
