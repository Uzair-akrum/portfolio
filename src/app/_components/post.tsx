"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function LatestPost() {



  return (
    <div className="w-full max-w-xs">

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-2"
      >

      </form>
    </div>
  );
}
