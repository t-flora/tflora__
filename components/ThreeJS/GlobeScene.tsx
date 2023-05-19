'use client';
import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as topojson from 'topojson-client';
import * as THREE from 'three';
import locations from '@/public/locations.json';

const polygonsMaterial = new THREE.MeshLambertMaterial({ color: 'darkslategrey', side: THREE.DoubleSide });

const World: React.FC = () => {
  const [landPolygons, setLandPolygons] = useState<any[]>([]);

  const locData = locations.map((item, _) => {
    const { latitude: lat, longitude: lng, ...rest } = item
    return {
        ...item,
        lat,
        lng,
        maxR: 10,
        propagationSpeed: 5,
        repeatPeriod: 250
    }
  })

  const colorInterpolator = ( t: number ) => `rgba(255,100,50,${Math.sqrt(1-t)})`;

  useEffect(() => {
    fetch('//unpkg.com/world-atlas/land-110m.json')
      .then((res) => res.json())
      .then((landTopo) => {
        setLandPolygons(topojson.feature(landTopo, landTopo.objects.land).features);
      });
  }, []);

    const globeEl = useRef();

    useEffect(() => {
      const globe = globeEl.current;

      // Auto-rotate
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 2.5;
      globe.controls().enableZoom = false;

    globe.controls().maxPolarAngle = -Math.PI / 3;
    globe.controls().minPolarAngle = Math.PI / 2;
    }, []);

//   const rotationAxes = {
//     x: 0,
//     y: 0,
//     z: 0,
//   }

  return (
    <div className='flex justify-center max-w-screen-md'>
        <Globe
        ref={globeEl}
        animateIn={false}
        backgroundColor="rgba(0,0,0,0)"
        polygonsData={landPolygons}
        polygonCapMaterial={polygonsMaterial}
        polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
        showGlobe={false}
        showAtmosphere={false}
        ringsData={locData}
        ringColor={() => colorInterpolator}
        ringMaxRadius='maxR'
        ringPropagationSpeed='propagationSpeed'
        ringRepeatPeriod='repeatPeriod'
        // objectRotation={rotationAxes}
        />
    </div>
  );
};

export default World;
