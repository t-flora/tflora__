'use client';
import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import * as topojson from 'topojson-client';
import * as THREE from 'three';
import locations from '@/public/locations.json';

const polygonsMaterial = new THREE.MeshLambertMaterial({ color: 'darkslategrey', side: THREE.DoubleSide });

const World: React.FC = () => {
  const [landPolygons, setLandPolygons] = useState<any[]>([]);

  const locData = locations.map((item, idx) => {
    const { latitude: lat, longitude: lng, ...rest } = item
    return {
        ...item,
        lat,
        lng,
        maxR: 10,
        propagationSpeed: (Math.random() - 0.5) * 20 + 1,
        repeatPeriod: Math.random() * 2000 + 200
    }
  })

  const colorInterpolator = ( t: any ) => `rgba(255,100,50,${Math.sqrt(1-t)})`;

  useEffect(() => {
    fetch('//unpkg.com/world-atlas/land-110m.json')
      .then((res) => res.json())
      .then((landTopo) => {
        setLandPolygons(topojson.feature(landTopo, landTopo.objects.land).features);
      });
  }, []);

  return (
    <div className='flex justify-center'>
        <Globe
        backgroundColor="rgba(0,0,0,0)"
        showGlobe={false}
        showAtmosphere={false}
        ringsData={locData}
        ringColor={() => colorInterpolator}
        ringMaxRadius='maxR'
        ringPropagationSpeed='propagationSpeed'
        ringRepeatPeriod='repeatPeriod'
        polygonsData={landPolygons}
        polygonCapMaterial={polygonsMaterial}
        polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
        />
    </div>
  );
};

export default World;
