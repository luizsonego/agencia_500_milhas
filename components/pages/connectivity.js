import Card from "../card";

export default function Connect({ connect }) {
  return (
    <div
      className="connectivity relative py-52 h-5/6"
    >
      <div className="w-4/5 mx-auto text-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 -mt-20 ">

          {
            connect.map((conn, index) => (
              <Card
                key={index}
                slug={conn.slug}
                image={conn.coverImage}
                title={conn.title}
                description={conn.excerpt}
                ogImage={conn.ogImage}
                ogImageMobile={conn.ogImageMobile}
                content={conn.content}
                backgroundColor="linear-gradient(90deg, #0F5CDC 20%, #0EC8F6 100.5%), #0656DB"
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};
