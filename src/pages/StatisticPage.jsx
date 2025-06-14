import { useEffect, useState } from "react";
import Header from "../components/header/Header.jsx";
import StatisticCard from "../components/statistics/StatisticCard.jsx";
const StatisticPage = () => {
  const [setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  },);
  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  return (
    <>
      <Header />
      <div className="px-6 md:pb-0 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>.
          </h2>
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
            <StatisticCard
              title={"Toplam Müşteri"}
              amount={"4"}
              img={"images/user.png"}
            />
            <StatisticCard
              title={"Toplam Kazanç"}
              amount={"400.00 ₺"}
              img={"images/money.png"}
            />
            <StatisticCard
              title={"Toplam Satış"}
              amount={"4"}
              img={"images/sale.png"}
            />
            <StatisticCard
              title={"Toplam Ürün"}
              amount={"20"}
              img={"images/product.png"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default StatisticPage;