import React from "react";
import { useCssHandles } from "vtex.css-handles";
import "./components/css/product.css";

// Adicionar aqui todas as classes
const CSS_HANDLES = ["aviso12d"];

const AvisosProduto = () => {
  const handles = useCssHandles(CSS_HANDLES);
  //console.log(handles)

  return (

    <div className="tubaroes-store-theme-1-x-alinhaAviso">

      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div class="elfsight-app-60c680c0-e28b-49aa-a0ac-562d0051a245"></div>

      <div className="tubaroes-store-theme-1-x-aviso12d">
      Produtos Personalizados Considerar 30 dias úteis de Produção + Prazo dos Correios (Mesmo SEM NOMES Considerar 30 dias Úteis).
      </div>
      <p className="tubaroes-store-theme-1-x-avisoProd">*Atenção pois não trocamos nomes nem tamanhos após a realização do pedido.</p>
      <br /><br />
      <img src="https://tubaroes.vteximg.com.br/arquivos/compra-segura.jpg" width="50%" className="tubaroes-store-theme-1-x-imgAviso" />
      <div className="tubaroes-store-theme-1-x-conteudoVideo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1i4ZexlE4a4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br /><br />
    </div>

  );
};

export default AvisosProduto;
