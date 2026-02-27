import React from "react";

function Why() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Vì sao chúng tôi tồn tại
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <p className="text-sm text-gray-500 uppercase">Tác động quốc gia</p>
          <h3 className="text-3xl font-bold mt-2">1 trong 4 phụ nữ</h3>
          <p className="text-gray-600 mt-3 text-sm">
            Trải qua bạo lực thể xác nghiêm trọng từ bạn tình trong suốt cuộc
            đời của họ.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <p className="text-sm text-gray-500 uppercase">Cuộc gọi mỗi ngày</p>
          <h3 className="text-3xl font-bold mt-2">20,000+</h3>
          <p className="text-gray-600 mt-3 text-sm">
            Số cuộc gọi gọi đến các đường dây nóng về bạo lực gia đình trên toàn
            quốc mỗi ngày.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <p className="text-sm text-gray-500 uppercase">Nguồn lực cần thiết</p>
          <h3 className="text-3xl font-bold mt-2">500+ địa điểm</h3>
          <p className="text-gray-600 mt-3 text-sm">
            Vẫn còn những thiếu hụt nghiêm trọng trong việc hỗ trợ cộng đồng tại
            các địa phương trên toàn quốc.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Why;
