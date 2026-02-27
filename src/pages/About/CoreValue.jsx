import React from "react";

function CoreValue() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-12">
        Giá trị cốt lõi của chúng tôi
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
            🛡
          </div>
          <h3 className="mt-6 font-semibold text-lg">An toàn là trên hết</h3>
          <p className="text-gray-600 mt-3 text-sm">
            Sự an toàn về thể chất và tinh thần của những người sống sót là ưu
            tiên tuyệt đối của chúng tôi trong mọi quyết định mà chúng tôi đưa
            ra.
          </p>
        </div>

        <div>
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
            🔒
          </div>
          <h3 className="mt-6 font-semibold text-lg">Bảo mật tuyệt đối</h3>
          <p className="text-gray-600 mt-3 text-sm">
            Chúng tôi sử dụng hệ thống bảo mật cấp doanh nghiệp để đảm bảo tất
            cả các thông tin liên lạc và hồ sơ được giữ bí mật nghiêm ngặt.
          </p>
        </div>

        <div>
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
            ❤️
          </div>
          <h3 className="mt-6 font-semibold text-lg">Hỗ trợ thấu cảm</h3>
          <p className="text-gray-600 mt-3 text-sm">
            Đội ngũ của chúng tôi được đào tạo về cách chăm sóc dựa trên sự thấu
            hiểu về sang chấn tâm lý, nhằm cung cấp sự trợ giúp đầy lòng trắc ẩn
            và không phán xét.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CoreValue;
