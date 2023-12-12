import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Sphere = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const geometry = new THREE.TorusGeometry(3, 1, 16, 100); // Radius, Tube, RadialSegments, TubularSegments
    const material = new THREE.MeshBasicMaterial({ color: "#1640D6" });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const light = new THREE.PointLight(0xfffff, 1, 100);
    light.position.set(0, 10, 10);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(800, 600);

    const animate = () => {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  const canvasStyles = {
    width: "100%",
    height: "300px",
    borderRadius: "82px 84px 0 0px",
    margin: "auto",
  };

  return <canvas ref={canvasRef} style={canvasStyles} />;
};

export default Sphere;
