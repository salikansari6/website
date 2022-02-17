export type ClassNameProps = string

export type StylesProps = Record<string, string>

export interface WrapperProps {
  className?: ClassNameProps
  children?: React.ReactNode
}
