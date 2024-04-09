import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: "Пользователь:" + id,
  };
}

export default function User({ params: { id } }: Props) {
  return <div>user {id}</div>;
}
