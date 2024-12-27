import { sva } from '@styled-system/css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
  leftslot?: React.ReactNode;
  rightslot?: React.ReactNode;
}

const inputStyles = sva({
  className: 'lukas-input',
  slots: ['root', 'input', 'slot'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      fontSize: 'sm',
      gap: 3,
      color: 'neutral.400',
      transition: '0.25s color',
      _focusWithin: {
        color: 'neutral.700',
      },
    },
    input: {
      outline: 'none',
      width: 'full',
      _placeholder: {
        color: 'neutral.400',
        transition: '0.25s color',
      },
      _focus: {
        _placeholder: {
          color: 'transparent',
        },
      },
    },
    slot: {
      '& svg': {
        color: 'inherit',
        width: '16px',
        height: '16px',
      },
    },
  },
});

export const Input: React.FC<InputProps> = (props) => {
  const classes = inputStyles();

  return (
    <div className={classes.root}>
      {props.leftslot && (
        <div className={classes.slot}>{props.leftslot}</div>
      )}

      <input className={classes.input} {...props} />

      {props.rightslot && (
        <div className={classes.slot}>
          {props.rightslot}
        </div>
      )}
    </div>
  );
};
