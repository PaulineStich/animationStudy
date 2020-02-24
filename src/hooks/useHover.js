import { useRef, useState, useEffect } from 'react';

const useHover = () => {
  const [hovered, setHovered] = useState(false);

  const ref = useRef();

  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);

  useEffect(
    () => {
      // console.log(ref)
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseenter', handleMouseOver);
        node.addEventListener('mouseleave', handleMouseOut);

        return () => {
          node.removeEventListener('mouseenter', handleMouseOver);
          node.removeEventListener('mouseleave', handleMouseOut);
        };
      }
    },
    [ref] 
  );

  return [ref, hovered];
}

export default useHover