import React, { useEffect } from "react";

function SendId() {
  useEffect(() => {
    const fileImage = localStorage.getItem("fileImage");

    if (fileImage) {
      const urlOne = `/api/dataentities/FL/documents/${fileImage}`;

      fetch(urlOne, {
        method: "PATCH",
        headers: {
          Accept: "application/vnd.vtex.ds.v10+json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          purchaseId: window.location.search.split("og=")[1]
        })
      }).then(resp => {
        if (resp.ok) {
          localStorage.removeItem("fileImage");
        }
      });
    }
  }, []);

  return <></>;
}

export default SendId;
