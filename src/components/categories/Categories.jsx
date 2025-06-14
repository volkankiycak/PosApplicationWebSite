import { PlusOutlined, EditOutlined } from "@ant-design/icons";

const Categories = () => {
  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      <li className="bg-pink-700 px-6 py-10 text-white cursor-pointer transition-all text-center min-w-[145px]">
        <span>Tümü</span>
      </li>
      <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px]">
        <span>Yiyecek</span>
      </li>
      <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px]">
        <span>İçecek</span>
      </li>
      <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px]">
        <span>Meyve</span>
      </li>
      <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px]">
        <span>Sebze</span>
      </li>
      <li className="bg-purple-800 px-6 py-10 text-white cursor-pointer hover:opacity-90 transition-all text-center min-w-[145px]">
        <PlusOutlined className="md:text-2xl" />
      </li>
      <li className="bg-orange-800 px-6 py-10 text-white cursor-pointer hover:opacity-90 transition-all text-center min-w-[145px]">
        <EditOutlined className="md:text-2xl" />
      </li>
    </ul>
  );
};
export default Categories;
