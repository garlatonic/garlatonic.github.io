import { redirect } from "next/navigation";
import DocPage from "../_components/doc-page";
import ResumeContainer from "./_components/resume-container";

export default function Resume() {
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }

  return (
    <DocPage>
      <ResumeContainer />
    </DocPage>
  );
}
