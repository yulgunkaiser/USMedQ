type Props = React.HTMLAttributes<HTMLDivElement>

export default function Card({ className = '', ...props }: Props) {
  return <div className={`rounded-lg border p-4 shadow-sm ${className}`} {...props} />
}
