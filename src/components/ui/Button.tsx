type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' }

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'px-4 py-2 rounded transition'
  const styles =
    variant === 'primary'
      ? 'bg-brand text-white hover:bg-brand-dark'
      : 'border border-brand text-brand hover:bg-brand-light/20'
  return <button className={`${base} ${styles} ${className}`} {...props} />
}
