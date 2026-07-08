export default function TechBadge({
  label,
  color,
  small,
}: {
  label: string
  color?: string
  small?: boolean
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${
        small ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-[11px]'
      }`}
      style={{
        borderColor: color ? `${color}40` : 'rgba(255,255,255,0.1)',
        color: color ? color : 'rgba(242,240,234,0.6)',
        background: color ? `${color}15` : 'rgba(255,255,255,0.03)',
      }}
    >
      {color && <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />}
      {label}
    </span>
  )
}
