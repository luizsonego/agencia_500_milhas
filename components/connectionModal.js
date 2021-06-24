import Image from "next/image"
import ModalTitle from "./modal-title"
import PostBody from "./post-body"
import ViewSource from "./view-source"

export default function ConnectionModal({ ogImage, title, content }) {
  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: '350px' }}>
        <ViewSource pathname={ogImage} />
        <div className="hidden md:block" >
          <Image
            alt={title}
            src={ogImage.url}
            layout="fill"
            objectFit="cover"
            quality={75}
            placeholder='blur'
          />
        </div>
        <div className="block md:hidden" >
          <Image
            alt={title}
            src={ogImage.urlMobile}
            layout="fill"
            objectFit="cover"
            quality={75}
            placeholder='blur'
          />
        </div>
      </div>
      <ModalTitle className="text-center">{title}</ModalTitle>
      <PostBody content={content} />
    </>
  )
}
