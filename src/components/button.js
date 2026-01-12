import MuiButton from '@mui/material/Button';

function Button({ children, onClick }) {
  return (
    <MuiButton
      variant="contained"
      onClick={onClick}
      sx={{
        width: '242px',
        padding: '11px 30px',
        borderRadius: '10px',
        border: '1px solid var(--color-yellow)',
        background: 'var(--bg-primary)',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        color: 'var(--color-red)',
        fontFamily: 'var(--font-display)',
        fontSize: '25px',
        textTransform: 'none',
        '&:hover': {
          background: 'var(--bg-secondary)',
        }
      }}
    >
      {children}
    </MuiButton>
  );
}

export default Button;