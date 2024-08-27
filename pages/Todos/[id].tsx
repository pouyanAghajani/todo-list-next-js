import { useRouter } from "next/router";

const id = () => {
  const todoId = useRouter().query.id;
  return <div>{todoId}</div>;
};
export default id;
