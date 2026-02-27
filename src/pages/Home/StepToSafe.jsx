import React from "react";

function StepToSafe() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-2xl font-bold">
        Các bước cần làm ngay để đảm bảo an toàn
      </h2>
      <p>
        Nếu bạn đang ở trong tình huống nguy hiểm, hãy làm theo những hướng dẫn
        sau để ưu tiên bảo vệ bản thân.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-lg">Tìm nơi an toàn</h3>
          <p className="text-sm text-gray-600 mt-2">
            Xác định nhà bạn bè, thư viện gần nhất hoặc nơi trú ẩn an toàn mà
            bạn có thể đến ngay khi khẩn cấp.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-lg">Lập kế hoạch an toàn</h3>
          <p className="text-sm text-gray-600 mt-2">
            Chuẩn bị giấy tờ quan trọng và một “túi khẩn cấp” gồm thuốc và chìa
            khóa, để ở nơi kín đáo nhưng dễ lấy.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold text-lg">Tìm kiếm sự hỗ trợ</h3>
          <p className="text-sm text-gray-600 mt-2">
            Kết nối với đội ngũ tư vấn được đào tạo của chúng tôi để được hỗ trợ
            về pháp lý, tài chính và tinh thần.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StepToSafe;
