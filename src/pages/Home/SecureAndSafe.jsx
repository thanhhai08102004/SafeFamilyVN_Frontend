import React from "react";
import { IoChatboxSharp } from "react-icons/io5";
import { CgAsterisk } from "react-icons/cg";

function SecureAndSafe() {
  return (
    <section className="px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          Bảo mật & An toàn
        </span>

        <h1 className="text-4xl font-bold mt-6">
          Bạn <span className="text-blue-600">không</span> hề đơn độc.
        </h1>

        <p className="mt-6 text-gray-600">
          Chúng tôi cung cấp không gian an toàn và hỗ trợ khẩn cấp cho những ai
          đang trải qua bạo lực gia đình. Sự an toàn, quyền riêng tư và sức khỏe
          của bạn là ưu tiên hàng đầu của chúng tôi.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            <CgAsterisk className="text-2xl text-white" />
            Nhận hỗ trợ ngay
          </button>

          <button className=" flex items-center justify-center gap-2 border px-6 py-3 rounded-lg hover:bg-gray-100">
            <IoChatboxSharp />
            Trò chuyện ẩn danh
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
        <div className="h-80 rounded-3xl bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 opacity-80"></div>
        <div className="absolute -bottom-10 -left-10 bg-white px-6 py-5 rounded-2xl shadow-xl flex items-start gap-4 w-80">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
            <span className="text-green-600 text-xl">🔒</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Duyệt web an toàn</h4>
            <p className="text-sm text-gray-500 mt-1 leading-snug">
              Lượt truy cập của bạn tại đây được mã hóa và sẽ không xuất hiện
              trong lịch sử trên thiết bị của bạn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecureAndSafe;
