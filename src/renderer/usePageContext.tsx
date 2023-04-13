import { atom, getDefaultStore, useAtomValue } from "jotai";
import type { PageContext } from "./types";

const pageContextAtom = atom(null! as PageContext);

// must be set in _default.page.{client,server}.tsx
export function setPageContext(pageContext: PageContext) {
  getDefaultStore().set(pageContextAtom, pageContext);
}

export function usePageContext() {
  const context = useAtomValue(pageContextAtom);
  return context;
}
