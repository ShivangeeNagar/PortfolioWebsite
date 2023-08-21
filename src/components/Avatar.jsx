/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/64d9444a58f50a12df4480ae.glb 
*/

import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from "leva";
import * as THREE from 'three';



export function Avatar(props) {

  const {animation} = props;
  const {headFollow, cursorFollow} = useControls({
    headFollow: false,
    cursorFollow: false,
    position: [0, 0, 0],
  });
  const group = useRef();
  const { nodes, materials } = useGLTF('models/64d9444a58f50a12df4480ae.glb');

  const {animations: typingAnimations } = useFBX("animations/Typing.fbx");
  const {animations: standingAnimations } = useFBX("animations/Standing.fbx");
  const {animations: fallingAnimations } = useFBX("animations/Falling.fbx");


  typingAnimations[0].name = "Typing";
  standingAnimations[0].name = "Standing";
  fallingAnimations[0].name = "Falling";

  const { actions } = useAnimations([typingAnimations[0], standingAnimations[0], fallingAnimations[0]], group);

  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine2").lookAt(target);
    }
  });

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation]);


  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Wolf3D_Avatar.skeleton} morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} />
    </group>
  );
}

useGLTF.preload('models/64d9444a58f50a12df4480ae.glb');
useFBX.preload("animations/Typing.fbx");
useFBX.preload("animations/Standing.fbx");
useFBX.preload("animations/Falling.fbx");
