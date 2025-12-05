// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
import "./globals.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesion Detection",
  description: "Lesion Detection",
  keywords: ["Lesion Detection", "Lesion", "Detection"],
};

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
export default layout