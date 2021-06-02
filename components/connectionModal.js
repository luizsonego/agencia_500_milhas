import Image from "next/image"
import ModalTitle from "./modal-title"
import PostBody from "./post-body"

export default function ConnectionModal({ ogImage, title, content }) {
  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: '350px' }}>
        <Image
          alt={title}
          src={ogImage}
          layout="fill"
          objectFit="none"
          quality={100}
        />
      </div>
      <ModalTitle className="text-center">{title}</ModalTitle>
      <PostBody content={content} />
    </>
  )
}
