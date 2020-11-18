import { useEffect } from "react";
import { useGetUser } from "@/helpers/actions/user";
import { useRouter } from "next/router";

const Redirect = ({ to }) => {
  const { data: user, loading: userLoading } = useGetUser();
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  });

  return null;
};

export default Redirect;
