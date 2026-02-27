import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-20">
      <div className="flex justify-around max-w-8xl mx-auto px-6 py-12 gap-10">
        <div className="items-center ">
          <h3 className="text-lg font-semibold">Safe FamilyVn</h3>
          <p className="text-sm text-gray-300 mt-4">
            Tổ chức phi lợi nhuận cung cấp nơi trú ẩn, tư vấn và hỗ trợ cho nạn
            nhân bạo lực gia đình.
          </p>
        </div>
        <div className=" flex justify-end items-center ">
          <div className="">
            <h4 className="font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">
                Nơi trú ẩn khẩn cấp
              </li>
              <li className="hover:text-white cursor-pointer">
                Hỗ trợ pháp lý
              </li>
              <li className="hover:text-white cursor-pointer">Tư vấn tâm lý</li>
              <li className="hover:text-white cursor-pointer">Tình nguyện</li>
            </ul>
          </div>

          {/* Support */}
          <div className="ml-70">
            <h4 className="font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">
                Trung tâm trợ giúp
              </li>
              <li className="hover:text-white cursor-pointer">
                Chính sách bảo mật
              </li>
              <li className="hover:text-white cursor-pointer">
                Điều khoản sử dụng
              </li>
              <li className="hover:text-white cursor-pointer">Quyên góp</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex justify-between items-center mx-5 border-t border-blue-800">
        <div className=" flex justify-start  text-center text-sm text-gray-400 py-4">
          © 2026 Mạng Lưới Không Gian An Toàn. Tất cả quyền được bảo lưu.
        </div>
        <div className="flex justify-center items-center ">
          <div className=" mx-8 flex justify-end  border-blue-800 text-center text-sm text-gray-400 py-4">
            Secure Site
          </div>
          <div className=" flex justify-end  border-blue-800 text-center text-sm text-gray-400 py-4">
            Verified Non profit
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
