import React from "react";

function Impact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-purple-100 rounded-3xl p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Tác động của chúng tôi trong năm nay
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Nhờ sự hỗ trợ của tình nguyện viên và nhà tài trợ, chúng tôi đã mang
          lại sự giúp đỡ cho hàng nghìn người.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          <div>
            <h3 className="text-3xl font-bold text-purple-700">12,500+</h3>
            <p className="text-sm text-gray-600 mt-2">Người được hỗ trợ</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-700">4,200</h3>
            <p className="text-sm text-gray-600 mt-2">Đêm an toàn cung cấp</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-700">850</h3>
            <p className="text-sm text-gray-600 mt-2">Vụ việc pháp lý</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-700">100%</h3>
            <p className="text-sm text-gray-600 mt-2">Bảo mật thông tin</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
