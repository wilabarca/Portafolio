"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Envoltorio cliente de next-themes: gestiona la clase `.dark` en `<html>`
 * y persiste la preferencia elegida. El modo oscuro es el default del
 * sitio (`defaultTheme="dark"`); `enableSystem` deja disponible "usar el
 * tema del sistema" para quien lo prefiera desde el ThemeToggle.
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
