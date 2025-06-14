import { Button, Card, Table } from "antd";
import { useState } from "react";
import CreateBill from "../components/cart/CreateBill.jsx";
import Header from "../components/header/Header.jsx";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataSource = [
    {
      key: "1",
      ürünGörseli: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNW0CnRf0On8_BoGClw0-g7A9nCtpr98BeQ&s"
          alt=""
          className="w-16 h-16 object-cover"
        />
      ),
      ürünAdı: "Kebap",
      kategori: "Yiyecek",
      ürünFiyatı: "40",
      ürünAdeti: "1",
      toplamFiyat: "40",
      action: "Sil",
    },
    {
      key: "2",
      ürünGörseli: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTiWilgFdD_u7dhG1b8janjOVFSUbFZHntQ&s"
          alt=""
          className="w-16 h-16 object-cover"
        />
      ),
      ürünAdı: "Şalgam",
      kategori: "İçecek",
      ürünFiyatı: "10",
      ürünAdeti: "1",
      toplamFiyat: "10",
      action: "Sil",
    },
    {
      key: "3",
      ürünGörseli: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4c00LRcgwOrEpv_X55iZHBHLUhsjlDYNdQ&s"
          alt=""
          className="w-16 h-16 object-cover"
        />
      ),
      ürünAdı: "Çorba",
      kategori: "Yiyecek",
      ürünFiyatı: "25",
      ürünAdeti: "1",
      toplamFiyat: "25",
      action: "Sil",
    },
    {
      key: "4",
      ürünGörseli: (
        <img
          src="https://static.tecim.web.tr/1233/library/1601579087-parmak-uzum.jpg"
          alt=""
          className="w-16 h-16 object-cover"
        />
      ),
      ürünAdı: "Üzüm",
      kategori: "Meyve",
      ürünFiyatı: "20",
      ürünAdeti: "1",
      toplamFiyat: "20",
      action: "Sil",
    },
    {
      key: "5",
      ürünGörseli: (
        <img
          src="https://static.ticimax.cloud/48857/uploads/urunresimleri/buyuk/1003838-cca939.jpg"
          alt=""
          className="w-16 h-16 object-cover"
        />
      ),
      ürünAdı: "Su",
      kategori: "İçecek",
      ürünFiyatı: "5",
      ürünAdeti: "1",
      toplamFiyat: "5",
      action: "Sil",
    },
  ];
  const columns = [
    {
      title: "Ürün Görseli",
      dataIndex: "ürünGörseli",
      key: "ürünGörseli",
    },
    {
      title: "Ürün Adı",
      dataIndex: "ürünAdı",
      key: "ürünAdı",
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "kategori",
    },
    {
      title: "Ürün Fiyatı",
      dataIndex: "ürünFiyatı",
      key: "ürünFiyatı",
    },
    {
      title: "Ürün Adeti",
      dataIndex: "ürünAdeti",
      key: "ürünAdeti",
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "toplamFiyat",
      key: "toplamFiyat",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  console.log(isModalOpen);

  return (
    <>
      <Header />
      <div className="px-100">
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x: 1200,
            y: 300,
          }}
        />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>100.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam %8</span>
              <span className="text-red-600">+8₺</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>108₺</b>
            </div>
            <Button
              className="mt-4 w-full"
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
export default CartPage;
