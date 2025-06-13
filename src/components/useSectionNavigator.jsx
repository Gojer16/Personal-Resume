import { useEffect, useState, useRef } from 'react';

function useSectionNavigator(sectionIds) {
  const [current, setCurrent] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
  }, [sectionIds]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown') {
        setCurrent((idx) => Math.min(idx + 1, sectionsRef.current.length - 1));
      }
      if (e.key === 'ArrowUp') {
        setCurrent((idx) => Math.max(idx - 1, 0));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const section = sectionsRef.current[current];
    section?.scrollIntoView({ behavior: 'smooth' });
  }, [current]);
}

export default useSectionNavigator; 