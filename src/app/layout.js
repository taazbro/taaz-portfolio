import './globals.css'

export const metadata = {
  title: 'Tanjim Ahmed Al Zabeer - AI Founder & Cybersecurity Expert',
  description: 'Founder & CEO of Vezran™, building secure-by-default AI infrastructure',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
