import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Chronicle & Field Notes — Hamid Shahid",
  description:
    "Deep-dive explorations into AI systems architecture, edge privacy, deterministic state machines, and the discipline of durable software engineering.",
  openGraph: {
    title: "The Chronicle & Field Notes — Hamid Shahid",
    description:
      "Deep-dive explorations into AI systems architecture, edge privacy, deterministic state machines, and the discipline of durable software engineering.",
    url: "https://hamidshahid.dev/articles",
    siteName: "Hamid Shahid — The Odyssey",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Chronicle & Field Notes — Hamid Shahid",
    description:
      "Deep-dive explorations into AI systems architecture, edge privacy, deterministic state machines, and the discipline of durable software engineering.",
    creator: "@Hamidcodedot",
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
