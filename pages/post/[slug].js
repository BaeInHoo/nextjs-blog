import { useRouter } from "next/router";

export default function slug() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const { slug } = router.query;

  return (
    <div>
      <h1>Post : {slug}</h1>
    </div>
  );
}