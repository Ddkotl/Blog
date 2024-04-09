import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: "Статья:" + id,
  };
}

export default function Post({ params: { id } }: Props) {
  return <div>post {id}</div>;
}
