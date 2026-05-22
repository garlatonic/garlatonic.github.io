import MousePointer from "@/components/common/mouse-pointer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MousePointer />
      {children}
    </>
  );
}