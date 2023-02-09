import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    speed={15}
    width={290}
    height={460}
    viewBox="0 0 307 380"
    backgroundColor="#f3f3f3"
    foregroundColor="#ffeee6"
  >
    <rect x="10" y="5" rx="10" ry="10" width="288" height="160" />  {/* Фото товара */}
    <rect x="10" y="177" rx="10" ry="10" width="288" height="25" />  {/* Заголовок */}
    <rect x="10" y="215" rx="10" ry="10" width="130" height="23" />  {/* Артикул */}
    <rect x="10" y="250" rx="15" ry="15" width="150" height="35" />  {/* Цена */}
    <rect x="10" y="315" rx="25" ry="25" width="154" height="45" />  {/* В корзину */}
    <rect x="250" y="315" rx="25" ry="25" width="50" height="45" />  {/* Количество товаров в корзине */}
  </ContentLoader>
)

export default Skeleton

