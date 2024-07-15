import PhotoModalPage from "./_component/PhotoModalPage";

type Props = {
  params: { username: string; id: string; photoId: string };
};
export default function page({ params }: Props) {
  const { id } = params;
  return <PhotoModalPage id={id} />;
}
