"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import progress from "@/lib/progress";

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    progress.finish();
  }, [pathname, searchParams]);

  return null;
}
