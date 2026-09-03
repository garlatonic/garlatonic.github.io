import { redirect } from "next/navigation";
import DocPage from "../_components/doc-page";
import CareerContainer from "./_components/career-container";

export default function CareerPage() {
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }

  return (
    <DocPage>
      <CareerContainer />
    </DocPage>
  );
}
