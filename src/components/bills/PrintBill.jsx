import { Button, Modal } from "antd";
const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Fatura Yazdır"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Fatura Detayı:</p>
                  <p>Unwrapped</p>
                  <p> Fake Street 123</p>
                  <p> San Javier </p>
                  <p> CA 1234</p>
                </div>
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Fatura:</p>
                  The Boring Company
                  <p> Tesla Street 007</p>
                  <p> Frisco </p>
                  <p> CA 0000</p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Fatura numarası:</p>
                    <p>00041</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">
                      Veriliş Tarihi:
                    </p>
                    <p>2022-11-21</p>
                  </div>
                </div>
                <div className="text-md text-slate-500 sm:block hidden">
                  <div>
                    <p className="font-bold text-slate-700">Şartlar:</p>
                    <p>10 gün</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">Vade:</p>
                    <p>2023-11-21</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Görsel
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      {" "}
                      Başlık
                    </th>
                    <th
                      colSpan={4}
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden"
                    >
                      {" "}
                      Başlık
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Fiyat
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Adet
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-end text-sm font-normal text-slate-700 md:pl-0"
                    >
                      Toplam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 sm:table-cell hidden">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNW0CnRf0On8_BoGClw0-g7A9nCtpr98BeQ&s"
                        alt=""
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-4 sm:table-cell hidden">
                      <div className="flex flex-col">
                        <span className="font-medium">Kebap</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 40₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 sm:hidden" colSpan={4}>
                      <div className="flex flex-col">
                        <span className="font-medium">Kebap</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 40₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span>40₺</span>
                    </td>
                    <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                      <span>1</span>
                    </td>
                    <td className="py-4 text-end">
                      <span>40.00₺</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 sm:table-cell hidden">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTiWilgFdD_u7dhG1b8janjOVFSUbFZHntQ&s"
                        alt=""
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-4 sm:table-cell hidden">
                      <div className="flex flex-col">
                        <span className="font-medium">Şalgam</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 10₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 sm:hidden" colSpan={4}>
                      <div className="flex flex-col">
                        <span className="font-medium">Şalgam</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 10₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span>10₺</span>
                    </td>
                    <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                      <span>1</span>
                    </td>
                    <td className="py-4 text-end">
                      <span>10.00₺</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 sm:table-cell hidden">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4c00LRcgwOrEpv_X55iZHBHLUhsjlDYNdQ&s"
                        alt=""
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-4 sm:table-cell hidden">
                      <div className="flex flex-col">
                        <span className="font-medium">Çorba</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 25₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 sm:hidden" colSpan={4}>
                      <div className="flex flex-col">
                        <span className="font-medium">Çorba</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 25₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span>25₺</span>
                    </td>
                    <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                      <span>1</span>
                    </td>
                    <td className="py-4 text-end">
                      <span>25.00₺</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 sm:table-cell hidden">
                      <img
                        src="https://static.tecim.web.tr/1233/library/1601579087-parmak-uzum.jpg"
                        alt=""
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-4 sm:table-cell hidden">
                      <div className="flex flex-col">
                        <span className="font-medium">Üzüm</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 20₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 sm:hidden" colSpan={4}>
                      <div className="flex flex-col">
                        <span className="font-medium">Üzüm</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 20₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span>20₺</span>
                    </td>
                    <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                      <span>1</span>
                    </td>
                    <td className="py-4 text-end">
                      <span>20.00₺</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 sm:table-cell hidden">
                      <img
                        src="https://static.ticimax.cloud/48857/uploads/urunresimleri/buyuk/1003838-cca939.jpg"
                        alt=""
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-4 sm:table-cell hidden">
                      <div className="flex flex-col">
                        <span className="font-medium">Su</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 5₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 sm:hidden" colSpan={4}>
                      <div className="flex flex-col">
                        <span className="font-medium">Su</span>
                        <span className="sm:hidden inline-block text-xs">
                          Birim Fiyatı 5₺
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span>5₺</span>
                    </td>
                    <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                      <span>1</span>
                    </td>
                    <td className="py-4 text-end">
                      <span>5.00₺</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">
                        Ara Toplam
                      </span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Ara Toplam</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">100₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">KDV</span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">KDV</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-red-600">+8₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">Genel Toplam</span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Genel Toplam</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">108₺</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                    Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                    sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                    talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                    ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                    Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                    geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                    England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                    Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
        <Button type="primary" size="large">
          Yazdır
        </Button>
      </div>
    </Modal>
  );
};
export default PrintBill;