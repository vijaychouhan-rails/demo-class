import axios from "axios";
import { useState, useEffect } from "react";

export function useLoadGetData({ urlPath, callApi }) {
  const [data, setData] = useState([]);
  const [otherData, setOtherData] = useState({});

  useEffect(() => {
    if (callApi) {
      axios
        .get(`https://reqres.in${urlPath}`)
        .then(function (response) {
          // handle success
          const { data, total_pages: totalPages, page } = response.data;

          setData(data);
          setOtherData({
            totalPages: totalPages,
            currentPage: page,
            nextPage: page === totalPages ? null : page + 1,
          });
        })
        .catch(function (error) {
          // handle error
          alert(error.message);
          // console.log("=====error=====", error);
        })
        .finally(function () {
          // setIsLoading(false);
        });
    }
  }, [callApi]);

  return { data, otherData };
}
