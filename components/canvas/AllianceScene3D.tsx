"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AllianceScene3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Scene setup with deep dark obsidian atmosphere (Anti-glare, eye-comfortable)
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.0025);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 80);

    // 2. Renderer with required print/capture preservation flags
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 3. Subtle, elegant cosmic dust particles (Ultra low glare, subtle amber/ruby ambient)
    const particleCount = 280; // Kept modest to avoid visual clutter
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const alphas = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      scales[i] = 1.0 + Math.random() * 2.0;
      alphas[i] = 0.15 + Math.random() * 0.35; // Gentle opacity, no eye strain
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Soft feathered circular sprite
    const createSoftTexture = () => {
      const texCanvas = document.createElement("canvas");
      texCanvas.width = 64;
      texCanvas.height = 64;
      const ctx = texCanvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(245, 158, 11, 0.8)");
        gradient.addColorStop(0.3, "rgba(217, 119, 6, 0.35)");
        gradient.addColorStop(0.7, "rgba(220, 38, 38, 0.1)");
        gradient.addColorStop(1, "rgba(3, 7, 18, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(texCanvas);
    };

    const particleTexture = createSoftTexture();
    const particlesMaterial = new THREE.PointsMaterial({
      size: 2.2,
      map: particleTexture,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointsMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(pointsMesh);

    // 4. Subtle, slow-rotating harmonic orbit rings in the far background
    const ambientRingsGroup = new THREE.Group();

    // Very thin, ethereal gold latitude ring
    const ringGeo1 = new THREE.RingGeometry(42, 42.4, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xd97706,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI * 0.35;
    ambientRingsGroup.add(ringMesh1);

    // Very thin ruby secondary ring
    const ringGeo2 = new THREE.RingGeometry(52, 52.3, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x991b1b,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI * 0.25;
    ambientRingsGroup.add(ringMesh2);

    scene.add(ambientRingsGroup);

    // 5. Parallax & Scroll Interpolation
    let targetCameraY = 0;
    let targetCameraX = 0;
    let targetRotY = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const progress = scrollY / totalScroll;

      targetCameraY = -progress * 24;
      targetRotY = progress * Math.PI * 0.6;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetCameraX = normX * 4;
      targetCameraY += -normY * 2;
    };

    const handleResize = () => {
      if (!canvas) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // 6. Animation Loop with smooth damping
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, targetCameraY * 0.4, 0);

      // Subtle celestial drift
      pointsMesh.rotation.y = elapsed * 0.02 + targetRotY;
      pointsMesh.rotation.x = Math.sin(elapsed * 0.05) * 0.05;

      ambientRingsGroup.rotation.z = elapsed * 0.015;
      ambientRingsGroup.rotation.y = elapsed * 0.01;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      particleTexture.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();

      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none w-full h-full"
      aria-hidden="true"
    />
  );
}
