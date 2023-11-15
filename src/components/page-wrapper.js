export default function PageWrapper({ children, className }) {
  return <div className={`px-2 lg:px-5 ${className}`}>{children}</div>
}
