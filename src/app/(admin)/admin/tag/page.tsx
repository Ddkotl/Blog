import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Тэги | YourLife-Online",
};
export default function AdminTag() {
  return (
    <>
      {" "}
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        tags
      </main>
    </>
  );
}
