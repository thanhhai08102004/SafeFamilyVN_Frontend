import React from "react";
import { FiPhoneCall } from "react-icons/fi";

function Helper() {
  return (
    <section className="px-8 mt-10 ">
      <div className="bg-black text-white p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center">
        <div>
          <FiPhoneCall className="text-6xl text-blue-700 bg-blue-200 rounded-4xl p-2" />
          <h3 className="font-semibold text-lg">
            Bạn cần giúp đỡ ngay bây giờ ?
          </h3>
          <p className="text-sm text-gray-300">
            Đường dây nóng quốc gia 24/7 luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-6">
          <span className="text-xl font-bold">1-800-799-7233</span>

          <button className="bg-blue-500 hover:bg-red-500 transition px-4 py-2 rounded-lg">
            Gọi ngay
          </button>
        </div>
      </div>
    </section>
  );
}

export default Helper;
