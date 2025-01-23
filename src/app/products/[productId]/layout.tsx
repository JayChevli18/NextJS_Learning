export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        {children}
        <h1 style={{color:"blue"}}>Featured Product</h1>
        </>
    );
}  