"use client";
import React from "react";
import {GoogleGeminiEffectDemo} from "@/components/GeminiEffect"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router=useRouter();
  return (
    <>
    <GoogleGeminiEffectDemo></GoogleGeminiEffectDemo>
    </>
  );
}
