import React from "react";

const Ready = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24">
      <div className="rounded-3xl bg-gradient-to-r from-purple-700 to-indigo-900 text-white text-center p-14">
        <h2 className="text-3xl font-bold">Sẵn sàng tạo nên sự khác biệt?</h2>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Tham gia cùng chúng tôi để xây dựng một thế giới nơi an toàn là quyền
          cơ bản của mọi người.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-600 transition">
            Tham gia ngay
          </button>
          <button className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-black transition">
            Liên hệ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ready;
