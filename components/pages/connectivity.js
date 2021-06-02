import Card from "../card";

export default function Connect({ connect }) {
  return (
    <div
      className="connectivity relative py-20 h-auto"
    >
      <div className="w-4/5 mx-auto text-center mt-10">
        <h2 className="text-4xl font-semibold text-white">
          Conectividade
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 ">

          {
            connect.map((conn, index) => (
              <Card
                key={index}
                slug={conn.slug}
                image={conn.coverImage}
                title={conn.title}
                description={conn.excerpt}
                ogImage={conn.ogImage}
                content={conn.content}
                backgroundColor="#ffffff55"
                blur
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
