import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Detecta si el componente ya se hidrató en cliente, sin recurrir al patrón
 * `useState` + `setState` dentro de `useEffect` (evitado por la regla
 * `react-hooks/set-state-in-effect`). Útil para leer APIs solo-cliente
 * como `next-themes` sin provocar un mismatch de hidratación.
 */
export function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
