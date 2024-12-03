
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const random = getRandomInt(10);
    if(random > 5) {
        throw new Error("Random error");
    }
    
  return (
    <>
        {children}
        <h2>Feature product</h2>
    </>
  );
}
