import './styles.css'
import { cn } from '@/utils'

type HRProps = {
  className?: string
  color?: string
  style?: React.CSSProperties
}

/* ========================================================================
                                    HR
======================================================================== */

export const HR = ({ className = '', color = '', style = {} }: HRProps) => {
  return (
    <div
      className={cn(
        'xx-horizontal-ruler [--hr-color:var(--color-primary)]',
        className
      )}
      style={{
        ...style,
        ...(color ? { '--hr-color': color } : {})
      }}
    >
      {[...Array(39)].map((_value, index) => {
        return <hr key={index} />
      })}
    </div>
  )
}
