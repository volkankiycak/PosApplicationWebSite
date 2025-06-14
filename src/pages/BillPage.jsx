import { Table } from "antd";
import { useState } from "react";
import PrintBill from "../components/bills/PrintBill.jsx";
import Header from "../components/header/Header.jsx";

const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderAction = () => (
    <p
      className="cursor-pointer text-[#1677FF] hover:text-[#125ECC]"
      onClick={() => setIsModalOpen(true)}
    >
      Yazdır
    </p>
  );

  const dataSource = [
    {
      key: "1",
      müşteriAdı: "Yücel Kıyçak",
      telefonNumarası: 5300000000,
      oluşturmaTarihi: "2020-01-01",
      ödemeYöntemi: "Kredi Kartı",
      toplamFiyat: "100₺",
    },
    {
      key: "2",
      müşteriAdı: "Aysel Kıyçak",
      telefonNumarası: 5300000000,
      oluşturmaTarihi: "2021-01-01",
      ödemeYöntemi: "Kredi Kartı",
      toplamFiyat: "100₺",
    },
    {
      key: "3",
      müşteriAdı: "Yusuf Kıyçak",
      telefonNumarası: 5300000000,
      oluşturmaTarihi: "2022-01-01",
      ödemeYöntemi: "Kredi Kartı",
      toplamFiyat: "100₺",
    },
    {
      key: "4",
      müşteriAdı: "Volkan Kıyçak",
      telefonNumarası: 5300000000,
      oluşturmaTarihi: "2023-01-01",
      ödemeYöntemi: "Kredi Kartı",
      toplamFiyat: "100₺",
    },
  ].map((item) => ({ ...item, action: renderAction() }));

  const columns = [
    { title: "Müşteri Adı", 
      dataIndex: "müşteriAdı", 
      key: "müşteriAdı" },
    {
      title: "Telefon Numarası",
      dataIndex: "telefonNumarası",
      key: "telefonNumarası",
    },
    {
      title: "Oluşturma Tarihi",
      dataIndex: "oluşturmaTarihi",
      key: "oluşturmaTarihi",
    },
    { title: "Ödeme Yöntemi", 
      dataIndex: "ödemeYöntemi", 
      key: "ödemeYöntemi" 
    },
    { title: "Toplam Fiyat", 
      dataIndex: "toplamFiyat", 
      key: "toplamFiyat" 
    },
    { title: "Action", 
      dataIndex: "action", 
      key: "action" 
    },
  ];

  console.log(isModalOpen);

  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Faturalar</h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x: 1100,
            y: 400,
          }}
        />
        <div className="cart-total flex justify-end mt-4"></div>
      </div>
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default BillPage;
