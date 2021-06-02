export default function ModalTitle({ children }) {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-none mb-12 text-center">
      {children}
    </h1>
  )
}
