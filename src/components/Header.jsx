import React from "react";
import { Link } from "react-router-dom";

function Header() {
  function quickExit() {
    // 1️⃣ Xóa dữ liệu local & session
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (e) {
      console.warn("Storage clear error:", e);
    }

    // 2️⃣ Xóa toàn bộ cookie
    try {
      document.cookie.split(";").forEach(function (c) {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
      });
    } catch (e) {
      console.warn("Cookie clear error:", e);
    }

    // 3️⃣ Xóa history hiện tại để không quay lại được
    try {
      window.history.pushState(null, "", window.location.href);
      window.history.replaceState(null, "", window.location.href);
    } catch (e) {
      console.warn("History error:", e);
    }

    // 4️⃣ Chuyển trang và không lưu vào history
    window.location.replace("https://www.google.com");
  }
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-blue-700">
          Safe FamilyVn
        </Link>
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
          <button
            onClick={() => quickExit()}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Thoát Nhanh
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
