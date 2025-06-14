import { Table } from "antd";
import Header from "../components/header/Header.jsx";

const CustomerPage = () => {
  const dataSource = [
    {
      key: "1",
      müşteriAdı: "Yücel Kıyçak",
      telefonNumarası: 5300000000,
      işlemTarihi: "2020-01-01",
    },
    {
      key: "2",
      müşteriAdı: "Aysel Kıyçak",
      telefonNumarası: 5300000000,
      işlemTarihi: "2021-01-01",
    },
    {
      key: "3",
      müşteriAdı: "Yusuf Kıyçak",
      telefonNumarası: 5300000000,
      işlemTarihi: "2022-01-01",
    },
    {
      key: "4",
      müşteriAdı: "Volkan Kıyçak",
      telefonNumarası: 5300000000,
      işlemTarihi: "2023-01-01",
    },
  ];

  const columns = [
    {
      title: "Müşteri Adı",
      dataIndex: "müşteriAdı",
      key: "müşteriAdı",
    },
    {
      title: "Telefon Numarası",
      dataIndex: "telefonNumarası",
      key: "telefonNumarası",
    },
    {
      title: "İşlem Tarihi",
      dataIndex: "işlemTarihi",
      key: "işlemTarihi",
    },
  ];

  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Müşterilerim</h1>
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
      </div>
    </>
  );
};

export default CustomerPage;