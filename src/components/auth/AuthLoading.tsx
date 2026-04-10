"use client";

import Image from "next/image";

export default function AuthLoading() {
  return (
    <div className="auth-loading-shell">
      <div className="auth-loading-card">
        <div className="auth-loading-logo-wrapper" aria-hidden="true">
          <Image
            className="auth-loading-logo"
            alt="Obspot carregando"
            src="/images/logo_obspot.svg"
            width={323}
            height={106}
            priority
          />
        </div>
      </div>
    </div>
  );
}
