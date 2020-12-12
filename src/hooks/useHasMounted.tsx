import React, { useEffect } from 'react';

export function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}
