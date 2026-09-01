import { useState, useEffect, type ReactNode } from "react";
export default function ClientOnly({
  children,
  fallback = false,
}: {
  children: () => ReactNode;
  fallback?: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <>{fallback}</>;
  return <>{children()}</>;
}
