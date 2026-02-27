import React from "react";

function Mission() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src="/team.jpg"
          alt="Our Team"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Sứ mệnh của chúng tôi:
          <br />
          Phá vỡ im lặng, xây dựng an toàn
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Safe FamilyVN cung cấp môi trường an toàn cho phòng chống bạo lực gia
          đình và hỗ trợ khẩn cấp. Chúng tôi tin rằng mọi người đều xứng đáng có
          một cuộc sống không sợ hãi và được bảo vệ.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
            Tham gia đội ngũ
          </button>

          <button className="px-6 py-3 rounded-lg border border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition">
            Đối tác của chúng tôi
          </button>
        </div>
      </div>
    </section>
  );
}

export default Mission;
