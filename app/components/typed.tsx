'use client';

import React, { ReactNode, useRef, useEffect, useState } from 'react';
import TypeIt from 'typeit-react';

interface TypeItComponentProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const TypeItComponent: React.FC<TypeItComponentProps> = ({ children, speed = 50, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const tempDiv = document.createElement('div');
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.position = 'absolute';
      tempDiv.style.width = `${containerRef.current.clientWidth}px`;
      tempDiv.innerHTML = children as string;
      document.body.appendChild(tempDiv);

      const height = tempDiv.clientHeight;
      setContainerHeight(height);

      document.body.removeChild(tempDiv);
    }
  }, [children]);

  return (
      <div
          ref={containerRef}
          style={{ minHeight: containerHeight ? `${containerHeight}px` : 'auto' }}
          className={className}
      >
        <TypeIt
            options={{
              strings: [children as string],
              speed: speed,
              waitUntilVisible: true,
              lifeLike: true,
              cursor: false,
            }}
        />
      </div>
  );
};

export default TypeItComponent;