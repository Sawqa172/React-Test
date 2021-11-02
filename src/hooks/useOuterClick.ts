import { useEffect, useRef } from 'react';

// iOS treats only certain elements as clickable. Add a listener on the React root
export default function useOuterClick(callback) {
  const innerRef = useRef();
  const callbackRef = useRef();

  // set current callback in ref, before second useEffect uses it
  useEffect(() => {
    // useEffect wrapper to be safe for concurrent mode
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);

    // read most recent callback and innerRef dom node from refs
    function handleClickOutside(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        // @ts-ignore
        !innerRef.current.contains(e.target)
      ) {
        // @ts-ignore
        callbackRef.current(e);
      }
    }
  }, []);

  return innerRef;
}
