import {useEffect} from 'react';
import { useGetUser } from "@/helpers/actions/user";
import {useRouter} from 'next/router';

const Redirect = () => {
  const { data: user, loading: userLoading } = useGetUser();
  const router = useRouter();

  return null;
}

export default Redirect;