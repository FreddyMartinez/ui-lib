import { ButtonProps } from "./Button.props";
import { StyledButton } from "./Button.styles";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      isPrimary={primary}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
