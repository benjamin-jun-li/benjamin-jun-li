import { Suspense } from 'react';
import Loading from "@/app/loading";

export default function ProjectLayout({
  children,}: { children: React.ReactNode }) {
    return (
        <section><Suspense fallback={<Loading />}>{ children }</Suspense></section>
    )
}