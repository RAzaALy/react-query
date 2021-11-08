import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchMembers = (role) => {
  return axios.get(`http://localhost:4000/members/${role}`);
};
const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["users", email], () => fetchUser(email));
  const role = user?.data.role;
  const { data: members } = useQuery(
    ["members", role],
    () => fetchMembers(role),
    {
      enabled: !!role,
    }
  );
  return (
    <div>
      {JSON.stringify(user?.data)}
      {JSON.stringify(members?.data)}
    </div>
  );
};

export default DependentQueries;
