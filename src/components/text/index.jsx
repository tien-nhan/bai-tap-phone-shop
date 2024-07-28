export function Text({ children, as: As = "span" }) {
  return (
    <>
      <As>{children}</As>
    </>
  );
}
