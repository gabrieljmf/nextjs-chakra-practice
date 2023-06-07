import Link from "next/link";
import { useState, useEffect } from "react";
import GetEducation, { GetWork } from "./fetch";
// import { GetWork } from "./fetch";

export default function About() {
  return (
    <div>
      <GetWork />
      <Link href="/api/data">data</Link>
      <GetEducation />
    </div>
  );
}
