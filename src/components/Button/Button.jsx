import styles from './styles.module.scss';
import classNames from 'classnames';

function MyButton({ content, variant = 'btn' , ...props}) {
  const { btn, btn1,btn1_1, btn2, btn3, btn4 } = styles;

  return (
    <button
      className={classNames({
        [btn]: variant === 'btn',
        [btn1]: variant === 'btn1',
        [btn1_1]: variant === 'btn1_1',
        [btn2]: variant === 'btn2',
        [btn3]: variant === 'btn3',
        [btn4]: variant === 'btn4',
      })}
      {...props}
    >
      {content}
    </button>
  );
}

export default MyButton;