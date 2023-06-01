import {
  Box,
  Clone,
  Float,
  Html,
  Mask,
  MeshDistortMaterial,
  PivotControls,
  useAnimations,
  useCursor,
  useGLTF,
  useMask,
  useScroll,
} from "@react-three/drei";

import { useControls } from "leva";
import {
  ChangeEvent,
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import THREE, {
  AdditiveBlending,
  Color,
  DoubleSide,
  FrontSide,
  LoopPingPong,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  RawShaderMaterial,
  ShaderMaterial,
  Vector2,
  Vector3,
} from "three";
import { useStore } from "..";
import Lights from "../Lights";
import { CelShader } from "../Shader/CelShader";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useAnimationControls } from "framer-motion";
import gsap from "gsap";
import { cameraStore } from "../../base/Stores/cameraStore";
import { fragmentShader, vertexShader } from "../Shader";

const Probe = ({ ...props }) => {
  const { scene, materials } = useGLTF("/probe-transformed.glb");
  useLayoutEffect(() => {
    Object.values(materials).forEach(
      (material: any) => (material.roughness = 0)
    );
    Object.assign(materials.light, {
      color: new Color("#ff2060"),
      emissive: new Color(1, 0, 0),
      emissiveIntensity: 2,
      toneMapped: false,
    });
  }, []);
  return <primitive object={scene} {...props} />;
};

const CoinMachine = (props: any) => {
  // const { scene, materials } = useGLTF("/coin-pusher.glb");
  const { scene, materials } = useGLTF("/pusher-toon.glb");

  // useLayoutEffect(() => {}, []);
  return (
    <primitive
      object={scene}
      {...props}
      // onClick={(e) => props.setTarget(e.object)}
      // onPointerOver={() => setHovered(true)}
      // onPointerOut={() => setHovered(false)}
    />
  );
};

const NesController = (props: any) => {
  // const { scene, materials } = useGLTF("/coin-pusher.glb");
  const { scene, materials } = useGLTF("/controller.glb");

  // useLayoutEffect(() => {}, []);
  return (
    <primitive
      object={scene}
      {...props}
      // onClick={(e) => props.setTarget(e.object)}
      // onPointerOver={() => setHovered(true)}
      // onPointerOut={() => setHovered(false)}
    />
  );
};

// const Girl = (props: any) => {
//   // const { scene, materials } = useGLTF("/coin-pusher.glb");
//   const { scene, nodes, scenes, animations } = useGLTF("/girl-morph.glb");
//   // console.log(animations, "...");
//   console.log(nodes, "...");
//   // useLayoutEffect(() => {}, []);
//   return (
//     <primitive
//       object={scene}
//       {...props}
//       // onClick={(e) => props.setTarget(e.object)}
//       // onPointerOver={() => setHovered(true)}
//       // onPointerOut={() => setHovered(false)}
//     />
//   );
// };

// const { scene, materials } = useGLTF("/coin-pusher.glb");
const Room = (props: any) => {
  const { scene, materials, nodes }: any = useGLTF("/room.glb");

  const stencil = useMask(1, true);

  useLayoutEffect(() => {
    Object.values<any>(nodes).forEach(
      (node) =>
        node.material &&
        // node.name === "tv" &&
        node.name === "tv_screen" &&
        // node.name === "chair_1" &&
        // node.name === "chair_2" &&
        Object.assign(node.material, stencil)
    );

    // materials["screen"].opacity = 0;
    // materials["screen"].visible = false;
  }, []);

  return (
    <group position-y={-2} onClick={(e) => console.log(e)}>
      {/* <PivotControls annotations> */}
      <group>
        <primitive object={nodes["chair_1"]}>
          <meshToonMaterial color="red" />
        </primitive>
        <primitive object={nodes["chair_2"]}>
          <meshToonMaterial color="#FBB13C" />
          {/* <MeshDistortMaterial color="red" {...stencil}></MeshDistortMaterial> */}
        </primitive>
        <pointLight position={[10, 10, 10]} />
        <primitive
          object={nodes["pillow_low"]}
          position={[-2, 0, 1]}
        ></primitive>
        <primitive object={nodes["tv"]}></primitive>

        <Html
          className="content-embed"
          scale={1}
          transform
          occlude="blending"
          position={[-0.29, 2.35, -9.15]}
          zIndexRange={[2, 0]}
        >
          <video
            className="content-video cursor-pointer"
            src="/baycity.mp4"
            muted={false}
            onClick={(event: any) => {
              if (event.target.paused) {
                event.target.play();
                return;
              }

              event.target.pause();
            }}
          ></video>
        </Html>
      </group>
    </group>
  );
};
interface Props {
  children?: React.ReactNode;
  loading: boolean;
  animationControls?: any;
}
const JumpCubeLoading = forwardRef<any, Props>(
  ({ loading, animationControls }, ref) => {
    // const { scene, nodes, scenes, animations } = useGLTF("/sci-luggage.glb");
    // const ref = useRef();
    const sitmod = useGLTF("/sit.glb");

    const { camera } = useThree();

    const { actions, clips, names } = useAnimations(
      sitmod.animations,
      ref as any
    );

    const stopAndLookAtCamera = () => {
      // actions.jump?.stopFading();
      actions.jump?.stop();
      // api.start({
      //   scale: 10,
      // });
    };
    useEffect(() => {
      console.log(sitmod.nodes, "sitAniactions");

      actions.jump?.fadeIn(0.2).setLoop(1, Infinity)?.setDuration(3.5)?.play();

      const timeOut = setTimeout(() => stopAndLookAtCamera(), 2000);

      return () => {
        clearTimeout(timeOut);
      };
    }, [names, actions, loading]);

    useFrame((state) => {
      // if (loading) {
      //   sitmod.nodes.JumpCube.scale.lerp(new Vector3(100, 100, 100), 1);
      // }
      // sitmod.nodes.JumpCube
      // sitmod.nodes.JumpCube.lookAt(state.camera.position);
    });

    return (
      <group ref={ref as any} visible={false}>
        {/* <PivotControls annotations visible={true}> */}
        <motion.primitive
          // ref={loadingRef}
          object={sitmod.scene}
          initial={{
            scale: 0.2,
          }}
          animate={animationControls}
          onAnimationComplete={(e: any) => {
            console.log(e);
            // animationControls.start({
            //   visible: false,
            // });
          }}
          // scale={0.2}
          position-x={-1}
          position-y={0.7}
        />
        {/* </PivotControls> */}

        {/* <Lights /> */}
      </group>
    );
  }
);
JumpCubeLoading.displayName = "JumpCubeLoading";

const Luggage = forwardRef((props: any, ref: any) => {
  // const { scene, materials } = useGLTF("/coin-pusher.glb");
  const loadingRef = useRef<any>(null!);

  const { loading } = props;

  const sitmod = useGLTF("/sit.glb");

  const { scene, nodes, scenes, animations } = useGLTF("/sci-luggage.glb");

  const luggageAni = useAnimations(animations, ref);

  const sitAni = useAnimations(sitmod.animations, ref);
  const animationControls: any = useAnimationControls();
  const mainAnimation: any = useAnimationControls();

  // const scrollContent = useScroll();

  // useLayoutEffect(() => {}, []);

  // lumens = watts × (lumens per watt)

  // Tungsten incandescent light bulb	12.5-17.5 lm/W
  // Halogen lamp	16-24 lm/W
  // Fluorescent lamp	45-75 lm/W
  // LED lamp	80-100 lm/W
  // Metal halide lamp	75-100 lm/W
  // High pressure sodium vapor lamp	85-150 lm/W
  // Low pressure sodium vapor lamp	100-200 lm/W
  // Mercury vapor lamp	35-65 lm/W

  const setLight = (light: any) => {
    light.intensity /= 404;
    light.castShadow = true;
    // light.penumbra = 1;
    // light.attenuation = 5;
    if (light.name === "Point") {
      light.castShadow = false;
    }

    return light;
  };

  const memoLights = useMemo(() => {
    const lights = scene.children.filter((child: any) => {
      if (child.type.includes("Light")) {
        return setLight(child);
      }
    });

    return lights;
  }, [scene]);

  useLayoutEffect(() => {
    console.log(nodes, "...");

    Object.entries(nodes).forEach((node) => {
      if (node[0].includes("luggage")) {
        nodes[node[0]].receiveShadow = true;
        nodes[node[0]].castShadow = true;
      }
    });
  }, []);

  useEffect(() => {
    luggageAni.actions?.cubeAnimation
      ?.setLoop(LoopPingPong, Infinity)
      ?.setDuration(0.8)
      ?.fadeIn(0)
      ?.play();
  }, [luggageAni, loading]);

  useEffect(() => {
    if (!loading) {
      // loadingRef.current.getObjectByName("JumpCube");

      animationControls.start(
        {
          scale: 30,
          y: -10,
          // opacity: 0,
          // visible: false,
        },
        {
          duration: 2,
          delay: 2,
        }
      );

      // setTimeout(() => {
      //   mainAnimation.start({
      //     // visibility: "visible",
      //     opacity: 1,
      //     visible: true,
      //   });

      //   animationControls.start({
      //     visible: false,
      //     opacity: 0,
      //   });
      // }, 3500);
    }

    // const jumpCube = loadingRef.current.getObjectByName("JumpCube");
  }, [loading]);

  useFrame(() => {
    // console.log(scrollContent);
  });
  nodes["back_plane"].receiveShadow = true;
  return (
    <group>
      <JumpCubeLoading
        loading
        ref={loadingRef}
        animationControls={animationControls}
      />
      <motion.group animate={mainAnimation} ref={ref as any} visible={true}>
        <primitive
          // receiveShadow
          // castShadow
          object={scene}
          {...props}
          // castShadow
          // receiveShadow
          // onClick={(e) => props.setTarget(e.object)}
          // onPointerOver={() => setHovered(true)}
          // onPointerOut={() => setHovered(false)}
        />

        {memoLights.map((light: any) => (
          // <PivotControls
          //   annotations
          //   key={light.name}
          //   offset={light.position as any}
          // >
          <Clone
            key={light.name}
            object={light}
            shadow-mapSize-height={1024}
            shadow-mapSize-width={1024}
            shadow-radius={10}
            shadow-bias={-0.0001}
          />
          // </PivotControls>
        ))}
      </motion.group>
    </group>
  );
});
Luggage.displayName = "Luggage";

const Eric = forwardRef((props: any, ref: any) => {
  // const { scene, materials } = useGLTF("/coin-pusher.glb");
  const { setPositionCurve, setPosition } = cameraStore();
  const { camera } = useThree();

  const loadingRef = useRef<any>(null!);

  const { loading } = props;

  const { scene, nodes, scenes, animations, materials } = useGLTF("/eric.glb");

  const ericAnim = useAnimations(animations, ref);

  useControls({
    color: {
      value: "#ff9e9e",
      onChange: (v) => {
        shaderInject(v);
      },
      transient: false,
    },
  });

  const posInject = () => {
    const positions: any = [];
    Object.entries(nodes).forEach((node) => {
      if (node[0].includes("cameraPlaceholder")) {
        positions.push(nodes[node[0]].position.toArray());
        // nodes[node[0]].receiveShadow = true;
        // nodes[node[0]].castShadow = true;
      }
    });
    setPosition(nodes.cubeHead.position.toArray());
    setPositionCurve(positions);
  };

  const shaderInject = (color: string) => {
    const material = materials.cubefacefront as MeshStandardMaterial;
    // material.color.setHex(Number(color.replace("#", "0x")));
  };

  useLayoutEffect(() => {
    const cubeFront = nodes.cubefacefront as Mesh;
    Object.entries(nodes).forEach((node) => {
      if (node[0].includes("luggage")) {
        nodes[node[0]].receiveShadow = true;
        nodes[node[0]].castShadow = true;
      }
    });

    const material = new RawShaderMaterial({
      vertexShader: `
        uniform mat4 projectionMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 modelMatrix;

        attribute vec3 position;

        void main() 
        {
          gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;
        void main()
        {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,
    });

    // cubeFront.material = material;
    // // materials.cubefacefront.needsUpdate = true;
    // console.log(materials.cubefacefront, "material");
    posInject();
  }, []);

  useEffect(() => {
    ericAnim.actions["retopo_bodyAction"]?.play();
    // ?.setLoop(LoopPingPong, Infinity)
    // ?.setDuration(0.8)
    // ?.fadeIn(0)

    // gsap
    //   .timeline()
    //   .to(camera.position, nodes["cameraPlaceholder_1"].position as any);
  }, [ericAnim, loading]);

  useFrame((state) => {
    // nodes.cubeHead.lookAt(camera.position);
  });
  return (
    <group>
      <motion.group ref={ref as any} visible={true}>
        <primitive
          // receiveShadow
          // castShadow
          object={scene}
          {...props}
          // castShadow
          // receiveShadow
          // onClick={(e) => props.setTarget(e.object)}
          // onPointerOver={() => setHovered(true)}
          // onPointerOut={() => setHovered(false)}
        />
      </motion.group>
      <Lights />
    </group>
  );
});
Eric.displayName = "Eric";

const Theatre = (props: any) => {
  const { scene, materials } = useGLTF("/theatre.glb");

  return <primitive object={scene} {...props} />;
};

useGLTF.preload("/sit.glb");

export {
  CoinMachine,
  Probe,
  Theatre,
  Room,
  NesController,
  Luggage,
  JumpCubeLoading,
  Eric,
};
