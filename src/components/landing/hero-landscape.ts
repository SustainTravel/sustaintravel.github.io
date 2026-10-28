// Live hero landscape: flat, two-tone hills in the logo's palette, a farmhouse, a sapling that grows
// on first view, drifting clouds and gliding birds. Loaded lazily by HeroScene; throws if WebGL fails.
import {
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  CircleGeometry,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  Float32BufferAttribute,
  Fog,
  Group,
  HemisphereLight,
  IcosahedronGeometry,
  LatheGeometry,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshToonMaterial,
  type Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  Shape,
  ShapeGeometry,
  SphereGeometry,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";

const C = {
  forest: 0x2f5d3a,
  leaf: 0x495e35,
  sage: 0x8baa6b,
  sagePale: 0xc9d8b0,
  meadow: 0xdfe7cc,
  sun: 0xedab4b,
  terracotta: 0xc8693a,
  wicker: 0x9a6a3a,
  cream: 0xf9f7eb,
  soil: 0x5e3d22,
};
const HORIZON = "#eef0dc"; // cream fading into sage-pale, also the fog colour

const smooth = (x: number) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));

export function mountLandscape(host: HTMLElement, onFirstFrame: () => void): () => void {
  const lite = matchMedia("(pointer: coarse)").matches || host.clientWidth < 420;
  const finePointer = matchMedia("(pointer: fine)").matches;

  // Throws when WebGL is unavailable; the caller keeps the logo poster.
  const renderer = new WebGLRenderer({ antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, lite ? 1.5 : 2));
  const canvas = renderer.domElement;
  canvas.setAttribute("aria-hidden", "true");
  canvas.addEventListener("webglcontextlost", () => delete host.dataset.ready);

  const scene = new Scene();
  scene.fog = new Fog(HORIZON, 16, 62);
  const sky = document.createElement("canvas");
  sky.width = 1;
  sky.height = 64;
  const g = sky.getContext("2d")!;
  const grad = g.createLinearGradient(0, 0, 0, 64);
  grad.addColorStop(0, "#d6e2bf");
  grad.addColorStop(0.55, HORIZON);
  grad.addColorStop(1, "#f9f7eb");
  g.fillStyle = grad;
  g.fillRect(0, 0, 1, 64);
  const skyTexture = new CanvasTexture(sky);
  skyTexture.colorSpace = SRGBColorSpace;
  scene.background = skyTexture; // an unmapped texture fills the screen: a flat illustrated sky

  // Toon output is albedo / PI per unit of light: these give lit faces their exact palette colour.
  scene.add(new HemisphereLight(0xffffff, 0xe8e2c8, 0.3 * Math.PI));
  const light = new DirectionalLight(0xfff4dc, 0.7 * Math.PI);
  light.position.set(-4, 6, 5);
  scene.add(light);

  const camera = new PerspectiveCamera(36, 1, 0.1, 120);
  const camBase = { x: 0, y: 2.8, z: 11 };
  camera.position.set(camBase.x, camBase.y, camBase.z);

  const toon = new Map<number, MeshToonMaterial>();
  const mat = (color: number) => {
    if (!toon.has(color)) toon.set(color, new MeshToonMaterial({ color, side: DoubleSide }));
    return toon.get(color)!;
  };
  const mesh = (geo: BufferGeometry, color: number) => new Mesh(geo, mat(color));

  let seed = 11;
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

  // Hills: rounded ridges at increasing distance, so the silhouettes overlap like the logo's bands.
  const layers: ((x: number, z: number) => number)[] = [];
  const hill = (z: number, depth: number, color: number, crest: (x: number) => number) => {
    const geo = new PlaneGeometry(60, depth, lite ? 28 : 44, 5);
    geo.rotateX(-Math.PI / 2);
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const u = p.getZ(i) / (depth / 2);
      p.setY(i, crest(p.getX(i)) * (1 - u * u) + (rand() - 0.5) * 0.1);
    }
    geo.computeVertexNormals();
    const m = mesh(geo, color);
    m.position.z = z;
    scene.add(m);
    layers.push((x, wz) => {
      const u = (wz - z) / (depth / 2);
      return Math.abs(u) < 1 ? crest(x) * (1 - u * u) : 0;
    });
  };
  const ground = (x: number, z: number) => Math.max(...layers.map((h) => h(x, z)));
  hill(-34, 22, C.sagePale, (x) => 6.2 + 1.4 * Math.sin(0.16 * x + 1) + 0.6 * Math.sin(0.43 * x));
  hill(-22, 18, C.sage, (x) => 4.4 + 1.1 * Math.sin(0.2 * x + 2.6) + 0.4 * Math.sin(0.55 * x + 1));
  hill(-12, 15, C.leaf, (x) => 3.1 + 0.8 * Math.sin(0.24 * x - 0.9) + 0.25 * Math.sin(0.7 * x));
  hill(-3, 14, C.sage, (x) => 1.9 + 0.55 * Math.sin(0.28 * x + 2.2));
  hill(6, 16, C.forest, (x) => 1.1 + 0.35 * Math.sin(0.32 * x + 0.4));

  // A pale track winding from the foreground up to the farm, dipping out of sight behind each ridge.
  const STEPS = 48;
  const track: number[] = [];
  const trackIndex: number[] = [];
  for (let i = 0; i <= STEPS; i++) {
    const s = i / STEPS;
    const z = 10 - 22 * s;
    const x = 1.4 + 2 * s + 1.4 * Math.sin(s * 7) * (1 - s);
    const w = 0.42 * (1 - s) + 0.06;
    track.push(x - w, ground(x - w, z) + 0.03, z, x + w, ground(x + w, z) + 0.03, z);
    if (i) trackIndex.push(2 * i - 2, 2 * i - 1, 2 * i, 2 * i - 1, 2 * i + 1, 2 * i);
  }
  const trackGeo = new BufferGeometry().setIndex(trackIndex);
  trackGeo.setAttribute("position", new Float32BufferAttribute(track, 3));
  scene.add(new Mesh(trackGeo, new MeshBasicMaterial({ color: C.meadow, side: DoubleSide })));

  // Farmhouses: whitewashed boxes with gabled terracotta roofs.
  const roofGeo = new CylinderGeometry(0.5, 0.5, 1, 3).rotateX(-Math.PI / 2).rotateY(Math.PI / 2);
  const wallGeo = new BoxGeometry(1, 1, 1);
  const house = (x: number, z: number, w: number, h: number) => {
    const group = new Group();
    const walls = mesh(wallGeo, C.cream);
    walls.scale.set(w, h, 0.8);
    walls.position.y = h / 2;
    const roof = mesh(roofGeo, C.terracotta);
    roof.scale.set(w + 0.14, 0.62, 1.05);
    roof.position.y = h + 0.14;
    group.add(walls, roof);
    group.position.set(x, ground(x, z) - 0.12, z);
    group.rotation.y = -0.35;
    scene.add(group);
  };
  house(3.4, -12, 1.2, 0.7);
  house(4.6, -12.4, 0.9, 0.95);
  if (!lite) house(2.3, -11.7, 0.8, 0.55);

  // Cypresses: a flame-shaped lathe, like the logo's tall dark tree.
  const cypressGeo = new LatheGeometry(
    [[0, 0], [0.22, 0.2], [0.26, 0.6], [0.18, 1.2], [0.07, 1.65], [0, 1.8]].map(([x, y]) => new Vector2(x, y)),
    7,
  );
  for (const [x, s] of lite ? [[5.9, 1.1]] : [[5.9, 1.1], [6.4, 0.8], [1.4, 0.75]]) {
    const c = mesh(cypressGeo, C.forest);
    c.position.set(x, ground(x, -12.2) - 0.1, -12.2);
    c.scale.setScalar(s);
    scene.add(c);
  }

  // Cork oaks of the montado: a dark trunk under a wide, flat crown.
  const trunkGeo = new CylinderGeometry(0.07, 0.11, 0.6, 5);
  const crownGeo = new IcosahedronGeometry(0.5, 0);
  const oaks = [[-4.6, -2.6, 1.1], [-2.6, -10.6, 0.75], [-7, -11.4, 0.8], [0.6, -21, 0.7]];
  for (const [x, z, s] of oaks.slice(0, lite ? 2 : 4)) {
    const group = new Group();
    const trunk = mesh(trunkGeo, C.soil);
    trunk.position.y = 0.3;
    group.add(trunk);
    for (const [cx, cy, cs] of [[0, 0.75, 1], [-0.4, 0.65, 0.7], [0.42, 0.68, 0.75]]) {
      const crown = mesh(crownGeo, C.leaf);
      crown.position.set(cx, cy, 0);
      crown.scale.set(cs * 1.2, cs * 0.6, cs);
      group.add(crown);
    }
    group.position.set(x, ground(x, z) - 0.08, z);
    group.scale.setScalar(s);
    scene.add(group);
  }

  // Sun and a soft halo behind the hills.
  const sunGroup = new Group();
  const sunDisc = new Mesh(new CircleGeometry(1.7, 40), new MeshBasicMaterial({ color: C.sun, fog: false }));
  const halo = new Mesh(
    new CircleGeometry(2.5, 40),
    new MeshBasicMaterial({ color: C.sun, fog: false, transparent: true, opacity: 0.16, depthWrite: false }),
  );
  sunGroup.add(halo, sunDisc);
  sunGroup.position.set(7, 13, -48);
  scene.add(sunGroup);

  // Clouds: a few flattened low-poly puffs.
  const cloudMat = new MeshBasicMaterial({ color: 0xfffdf4, fog: false });
  const puffGeo = new IcosahedronGeometry(1, 1);
  const clouds = (lite ? [[-3, 9.6, -30], [9, 11.4, -38]] : [[-3, 9.6, -30], [9, 11.4, -38], [-14, 12.4, -42]]).map(
    ([x, y, z]) => {
      const group = new Group();
      for (const [px, py, ps] of [[0, 0, 1], [-1.1, -0.25, 0.7], [1.2, -0.2, 0.8]]) {
        const puff = new Mesh(puffGeo, cloudMat);
        puff.position.set(px, py, 0);
        puff.scale.set(ps * 1.3, ps * 0.7, ps);
        group.add(puff);
      }
      group.position.set(x, y, z);
      scene.add(group);
      return group;
    },
  );

  // Birds: two thin wings in a V that flap slowly between long glides.
  const wingGeo = new BufferGeometry().setFromPoints(
    [new Vector3(0, 0, 0), new Vector3(0.42, 0.07, 0), new Vector3(0.36, -0.02, 0.02)],
  );
  const birdMat = new MeshBasicMaterial({ color: C.forest, side: DoubleSide, fog: false });
  const birds = (lite ? [0, 1] : [0, 1, 2]).map((i) => {
    const group = new Group();
    const right = new Mesh(wingGeo, birdMat);
    const left = new Mesh(wingGeo, birdMat);
    left.scale.x = -1;
    group.add(right, left);
    group.position.set(-9 + i * 3.4, 6.2 + (i % 2) * 0.7, -6 - i);
    group.scale.setScalar(1.2 - i * 0.15);
    scene.add(group);
    return { group, left, right, phase: i * 1.7 };
  });

  // Sapling in the foreground: a soil mound, a stem and leaf pairs that unfurl as it grows.
  const sx = -1.1;
  const sz = 3.4;
  const base = ground(sx, sz);
  const soil = mesh(new SphereGeometry(0.42, 10, 4, 0, Math.PI * 2, 0, Math.PI / 2), C.wicker);
  soil.scale.set(1.5, 0.5, 1.1);
  soil.position.set(sx, base - 0.02, sz);
  scene.add(soil);

  const sapling = new Group();
  sapling.position.set(sx, base + 0.1, sz);
  sapling.scale.setScalar(1.6);
  scene.add(sapling);
  const STEM = 1.05;
  const stem = mesh(new CylinderGeometry(0.016, 0.034, STEM, 6).translate(0, STEM / 2, 0), C.forest);
  sapling.add(stem);

  const half = new Shape();
  half.moveTo(0, 0);
  half.bezierCurveTo(0.26, 0.04, 0.26, 0.32, 0, 0.5);
  const halfGeo = new ShapeGeometry(half, 6);
  const leafSpecs: [number, number, number, number][] = [
    // height on stem, side, light half colour, dark half colour
    [0.36, 1, C.sage, C.leaf],
    [0.6, -1, C.sage, C.leaf],
    [0.82, 1, C.sage, C.leaf],
    [1, 0, C.sage, C.forest],
  ];
  const leaves = leafSpecs.map(([at, side, light, dark], i) => {
    const pivot = new Group();
    const blade = new Group();
    const a = mesh(halfGeo, light);
    const b = mesh(halfGeo, dark);
    b.scale.x = -1;
    blade.add(a, b);
    pivot.add(blade);
    pivot.rotation.y = side * 0.5;
    sapling.add(pivot);
    return { pivot, blade, at, size: side === 0 ? 0.75 : 1 - i * 0.08, tilt: -side * 0.95, phase: i * 1.3 };
  });

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = host;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(host);

  const pointer = { x: 0, y: 0 };
  const onPointer = (e: PointerEvent) => {
    pointer.x = e.clientX / innerWidth - 0.5;
    pointer.y = e.clientY / innerHeight - 0.5;
  };
  if (finePointer) addEventListener("pointermove", onPointer, { passive: true });

  let t = 0;
  let last = -1;
  let first = true;
  const GROW_START = 0.8;
  const frame = (now: number) => {
    const dt = last < 0 ? 0 : Math.min((now - last) / 1000, 0.05); // no jump after a pause
    last = now;
    t += dt;

    // Gentle parallax on desktop, a slow drift on touch screens.
    const tx = finePointer ? pointer.x * 1.4 : Math.sin(t * 0.13) * 0.5;
    const ty = finePointer ? -pointer.y * 0.5 : Math.sin(t * 0.09) * 0.15;
    const k = 1 - Math.exp(-dt * 1.6);
    camera.position.x += (camBase.x + tx - camera.position.x) * k;
    camera.position.y += (camBase.y + ty - camera.position.y) * k;
    camera.lookAt(0, 2.45, 0);

    // Sapling grows out of the soil, then sways.
    const grow = smooth((t - GROW_START) / 3.2);
    stem.scale.set(0.4 + 0.6 * grow, Math.max(grow, 0.001), 0.4 + 0.6 * grow);
    const sway = smooth((t - GROW_START - 2.5) / 3);
    sapling.rotation.z = Math.sin(t * 0.6) * 0.045 * sway;
    sapling.rotation.x = Math.sin(t * 0.43 + 1) * 0.02 * sway;
    for (const l of leaves) {
      const open = smooth((grow * 1.15 - l.at * 0.75) / 0.4);
      l.pivot.position.y = l.at * STEM * grow;
      l.blade.scale.setScalar(Math.max(open, 0.001) * l.size);
      l.pivot.rotation.z = l.tilt * open + Math.sin(t * 0.9 + l.phase) * 0.06 * sway;
    }

    const breath = Math.sin(t * 0.5);
    sunDisc.scale.setScalar(1 + breath * 0.025);
    halo.scale.setScalar(1 + breath * 0.07);

    for (const c of clouds) {
      c.position.x += dt * 0.12;
      if (c.position.x > 18) c.position.x = -18;
    }
    for (const b of birds) {
      b.group.position.x += dt * 0.42;
      b.group.position.y += Math.sin(t * 0.7 + b.phase) * dt * 0.08;
      if (b.group.position.x > 10) b.group.position.x = -10;
      const flap = 0.2 + Math.max(0, Math.sin(t * 0.5 + b.phase)) * Math.sin(t * 5 + b.phase) * 0.35;
      b.right.rotation.z = flap;
      b.left.rotation.z = -flap;
    }

    renderer.render(scene, camera);
    if (first) {
      first = false;
      onFirstFrame();
    }
  };

  // Run only while the hero is on screen and the tab is visible.
  let onScreen = false;
  const sync = () => {
    const run = onScreen && !document.hidden;
    if (!run) last = -1;
    renderer.setAnimationLoop(run ? frame : null);
  };
  const io = new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    sync();
  });
  io.observe(host);
  document.addEventListener("visibilitychange", sync);

  host.appendChild(canvas);

  return () => {
    renderer.setAnimationLoop(null);
    io.disconnect();
    ro.disconnect();
    document.removeEventListener("visibilitychange", sync);
    removeEventListener("pointermove", onPointer);
    const geometries = new Set<BufferGeometry>();
    const materials = new Set<Material>();
    scene.traverse((o: Object3D) => {
      if (o instanceof Mesh) {
        geometries.add(o.geometry);
        materials.add(o.material);
      }
    });
    geometries.forEach((x) => x.dispose());
    materials.forEach((x) => x.dispose());
    skyTexture.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    canvas.remove();
  };
}
