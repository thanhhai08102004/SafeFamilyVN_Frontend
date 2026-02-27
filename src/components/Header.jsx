import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-bold text-blue-700">Safe FamilyVn</div>
        <div className="flex justify-center items-center ">
          <nav className=" flex justify-between gap-6 text-sm text-gray-600 mx-5">
            <a href="/" className="hover:text-blue-600 transition">
              Trang Chủ
            </a>
            <a
              href="/about"
              className="flex justify-between gap-8 text-sm hover:text-blue-600"
            >
              Giới Thiệu
            </a>
            <a
              href="#"
              className="flex justify-between gap-6 text-sm hover:text-blue-600"
            >
              Kiến Thức Phòng Chóng
            </a>
            <a
              href="/infomation"
              className="flex justify-between gap-6 text-sm hover:text-blue-600"
            >
              Thông Tin Pháp Luật
            </a>
          </nav>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Thoát Nhanh
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
