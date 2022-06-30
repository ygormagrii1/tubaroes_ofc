import React, { useState, useEffect, useRef } from "react";
import { useCssHandles } from "vtex.css-handles";
import "./components/css/product.css";

// Adicionar aqui todas as classes
const CSS_HANDLES = ["fileupload"];

const FileUpload = () => {
  const imageRef = useRef(null);
  const handles = useCssHandles(CSS_HANDLES);

  useEffect(() => {
    console.log(
      document.querySelector(
        ".vtex-flex-layout-0-x-flexRowContent--btn-paginaproduto > div"
      )
    );

    const personalizar = setInterval(() => {
      document
        .querySelector(".vtex-product-customizer-2-x-inputValueOptionBox--sim")
        ?.addEventListener("click", () => {
          document.querySelector(
            ".vtex-product-customizer-2-x-fileupload"
          ).style.display = "block";
        });

      document
        .querySelector(".vtex-product-customizer-2-x-inputValueOptionBox--nao")
        ?.addEventListener("click", () => {
          document.querySelector(
            ".vtex-product-customizer-2-x-fileupload"
          ).style.display = "none";
        });

      if (
        document.querySelector(
          ".vtex-product-customizer-2-x-inputValueOptionBox--sim"
        )
      ) {
        clearInterval(personalizar);
        document
          .querySelector(
            ".vtex-product-customizer-2-x-inputValueOptionBox--nao"
          )
          ?.click();
      }
    }, 1000);

    document
      .querySelector(
        ".vtex-flex-layout-0-x-flexRowContent--btn-paginaproduto > div"
      )
      ?.addEventListener("click", () => {
        console.log("clicou");
        if (imageRef.current) {
          console.log("entrou no if");
          sendImage(imageRef.current);
          imageRef.current = null;
        }
      });
  }, []);

  async function sendImage(img) {
    let documentId = localStorage.getItem("fileImage");

    if (!documentId) {
      const url = `/api/dataentities/FL/documents/`;

      const resp = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/vnd.vtex.ds.v10+json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          purchaseId: ""
        })
      });

      if (!resp.ok && resp.status !== 304) {
        throw new Error(await resp.json());
      }

      const { DocumentId } = await resp.json();

      documentId = DocumentId;
    }

    const urlAttachment = `/api/dataentities/FL/documents/${documentId}/fileImage/attachments`;
    const formData = new FormData();
    formData.append("value", img);

    console.log(formData, "file");

    const respAttachment = await fetch(urlAttachment, {
      method: "POST",
      "Content-Type": "multipart/form-data",
      body: formData
    });

    if (respAttachment.ok) {
      localStorage.setItem("fileImage", documentId);
    }
  }

  // const handles = useCssHandles(CSS_HANDLES);
  //console.log(handles)

  return (
    <div className="vtex-product-customizer-2-x-fileupload mb4">
      <label class="vtex-input w-100">
        <span class="vtex-input__label db mb3 w-100 c-on-base t-small ">
          Adicione seu logo ou estampa ou teste
        </span>
        <div class="vtex-input-prefix__group flex flex-row items-stretch overflow-hidden br2 bw1 b--solid b--muted-4 hover-b--muted-3 h-regular ">
          <input
            onChange={async event => {
              imageRef.current = event.target.files[0];
              console.log(imageRef.current, "Image REF");
            }}
            class="vtex-styleguide-9-x-input ma0 border-box vtex-styleguide-9-x-hideDecorators vtex-styleguide-9-x-noAppearance br2   w-100 bn outline-0 bg-base c-on-base b--muted-4 hover-b--muted-3 t-body ph5 "
            type="file"
          />
        </div>
      </label>
    </div>
  );
};

export default FileUpload;
