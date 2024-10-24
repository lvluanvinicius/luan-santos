import DefaultLayout from "@/layouts/default";
import { Page } from "./page";

export default function handler() {
  return (
    <DefaultLayout>
      <Page />
    </DefaultLayout>
  );
}
