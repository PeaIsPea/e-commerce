import styles from './styles.module.scss';
import classNames from 'classnames';

function MyButton({ content, variant = 'btn' }) {
  const { btn, btn2, btn3 } = styles;

  return (
    <button
      className={classNames({
        [btn]: variant === 'btn',
        [btn2]: variant === 'btn2',
        [btn3]: variant === 'btn3',
      })}
    >
      {content}
    </button>
  );
}

export default MyButton;