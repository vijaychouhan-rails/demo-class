import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useLoadGetData } from "@/hooks/useLoadGetData";

function Dec15UserProfile() {
  const router = useRouter();
  const [userData, setUserData] = useState({});

  const { data } = useLoadGetData({
    urlPath: `/api/users/${router.query.id}`,
    callApi: !!router.query.id,
  });

  console.log("===data====", data);

  //   useEffect(() => {
  //     console.log("===router.query===", router.query.id);
  //     if (!!router.query.id) {
  //       loadData();
  //     }
  //   }, [router.query.id]);

  //   const loadData = () => {
  //     axios
  //       .get(`https://reqres.in/api/users/${router.query.id}`)
  //       .then(function (response) {
  //         // handle success
  //         const { data } = response.data;

  //         setUserData(data);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         alert(error.message);
  //         // console.log("=====error=====", error);
  //       });
  //   };

  //   console.log("===data===", userData);
  return (
    <div>
      <p>id: {data.id}</p>
      <p>email: {data.email}</p>
      <p>
        Name: {data.first_name} {userData.last_name}
      </p>
    </div>
  );
}

export default Dec15UserProfile;
